import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db, auth } from '../firebase/config';

export default function TurmasCalendario() {
  const navigate = useNavigate();
  const [turmas, setTurmas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authStatusChecked, setAuthStatusChecked] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Testando conexão com Firestore...");
      console.log("Usuário autenticado:", user?.uid);
      if (user) {
        const fetchTurmas = async () => {
          try {
            const turmasRef = collection(db, 'turmas');
            const q = query(turmasRef); 
            const querySnapshot = await getDocs(q);
            console.log("Quantidade de turmas:", querySnapshot.size);
            querySnapshot.forEach(doc => {
              console.log("Turma:", doc.id, doc.data());
            });
            const fetchedTurmas = querySnapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            }));
            setTurmas(fetchedTurmas);
          } catch (err) {
            console.error("Erro ao buscar turmas:", err);
          } finally {
            setLoading(false);
          }
        };
        fetchTurmas();
      } else {
        setLoading(false);
      }
      setAuthStatusChecked(true); 
    });
    return () => unsubscribe(); 
  }, []);

  if (!authStatusChecked) {
    return <div className="card">Verificando autenticação...</div>;
  }

  if (loading) {
    return <div className="card">Carregando turmas...</div>;
  }

  return (
    <div className="card">
      <h2>Minhas Turmas e Calendário</h2>
      
      {turmas.length > 0 ? (
        <div>
          <h3>Turmas Ativas</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {turmas.map(turma => (
              <li key={turma.id} style={{
                marginBottom: '10px',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '8px'
              }}>
                <strong>{turma.nome}</strong>
                
                {/* Calendário das aulas */}
                {turma.calendario && turma.calendario.length > 0 && (
                  <div style={{ marginTop: '10px' }}>
                    <h4>Calendário das Aulas:</h4>
                    <ul>
                      {turma.calendario.map((aula, idx) => (
                        <li key={idx}>
                          <strong>{aula.data}:</strong> {aula.tema}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Você não está associado a nenhuma turma.</p>
      )}

      <button onClick={() => navigate('/dashboard')} style={{ marginTop: '20px' }}>
        Voltar para o Dashboard
      </button>
    </div>
  );
}