import React, { useState, useEffect, use } from 'react';
import { useNavigate } from 'react-router-dom';
import {db, auth} from '../firebasec/onfig';
import { collection, query, where, getDocs} from 'firebase/firestore';

export default function TurmasCalendario() {
  const navigate = useNavigate();
  const [turmas, setTurmas] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = auth.currentUser;

  useEffect(() => {
    const fetchTurmas = async () => {
        if (!user) {
            setLoading(false);
            return;
        }

         try {
        const turmasRef = collection(db, 'turmas');
        const q = query(turmasRef, where('professorId', '==', user.uid));
        const querySnapshot = await getDocs(q);
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
  }, [user]);

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
                <strong>{turma.nome}</strong> - {turma.disciplina}
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
