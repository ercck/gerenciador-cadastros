import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MOCK_ALUNOS = [
  { id: 101, nome: 'Ana Clara Silva', matricula: '2023001', presente: false, foto: 'https://randomuser.me/api/portraits/women/32.jpg' },
  { id: 102, nome: 'Bruno Oliveira Santos', matricula: '2023002', presente: false, foto: 'https://randomuser.me/api/portraits/men/45.jpg' },
  { id: 103, nome: 'Carla Ferreira Lima', matricula: '2023003', presente: false, foto: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { id: 104, nome: 'Diego Almeida Costa', matricula: '2023004', presente: false, foto: 'https://randomuser.me/api/portraits/men/22.jpg' },
  { id: 105, nome: 'Eduarda Martins', matricula: '2023005', presente: false, foto: 'https://randomuser.me/api/portraits/women/17.jpg' },
  { id: 106, nome: 'Fábio Pereira Gomes', matricula: '2023006', presente: false, foto: 'https://randomuser.me/api/portraits/men/67.jpg' },
  { id: 107, nome: 'Gabriela Souza', matricula: '2023007', presente: false, foto: 'https://randomuser.me/api/portraits/women/55.jpg' },
  { id: 108, nome: 'Henrique Ribeiro', matricula: '2023008', presente: false, foto: 'https://randomuser.me/api/portraits/men/34.jpg' },
  { id: 109, nome: 'Isabel Fernandes', matricula: '2023009', presente: false, foto: 'https://randomuser.me/api/portraits/women/8.jpg' },
  { id: 110, nome: 'João Pedro Lima', matricula: '2023010', presente: false, foto: 'https://randomuser.me/api/portraits/men/91.jpg' },
  { id: 111, nome: 'Karina dos Santos', matricula: '2023011', presente: false, foto: 'https://randomuser.me/api/portraits/women/42.jpg' },
  { id: 112, nome: 'Lucas Andrade', matricula: '2023012', presente: false, foto: 'https://randomuser.me/api/portraits/men/16.jpg' }
];

const MOCK_TURMAS = [
  { id: 1, nome: '6º Ano A - Matemática', periodo: 'Manhã' },
  { id: 2, nome: '7º Ano B - Ciências', periodo: 'Manhã' },
  { id: 3, nome: '8º Ano C - História', periodo: 'Tarde' },
  { id: 4, nome: '9º Ano D - Português', periodo: 'Tarde' }
];

const LancarPresenca = () => {
  const navigate = useNavigate(); 
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [students, setStudents] = useState([]);
  const [allPresent, setAllPresent] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedClass) {
      setLoading(true);
      
      setTimeout(() => {
        setStudents(MOCK_ALUNOS);
        setLoading(false);
      }, 800);
    } else {
      setStudents([]);
    }
  }, [selectedClass]);

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    
    setSelectedDate(`${year}-${month}-${day}`);
  }, []);

  const toggleAttendance = (studentId) => {
    const updatedStudents = students.map(student => 
      student.id === studentId 
        ? { ...student, presente: !student.presente } 
        : student
    );
    
    setStudents(updatedStudents);
    
    const allArePresent = updatedStudents.every(student => student.presente);
    setAllPresent(allArePresent);
  };

  const markAllPresent = () => {
    const updatedStudents = students.map(student => ({ ...student, presente: true }));
    setStudents(updatedStudents);
    setAllPresent(true);
  };

  const saveAttendance = () => {
    if (!selectedClass || !selectedDate) {
      alert('Por favor, selecione uma turma e uma data válida.');
      return;
    }
    
    setLoading(true);
    
    
    setTimeout(() => {
      setLoading(false);
      
     
      console.log('Dados enviados para a API:', {
        turmaId: selectedClass,
        data: selectedDate,
        presencas: students.map(({ id, presente }) => ({ alunoId: id, presente }))
      });
      
      alert('Presenças registradas com sucesso!');
      
      
    }, 1000);
  };

  return (
    <div className="page">
      <h2>Lançamento de Presença</h2>
      
      <div className="controls">
        <label htmlFor="presenca-turma-select">Turma:</label>
        <select 
          id="presenca-turma-select"
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          disabled={loading}
        >
          <option value="">Selecione uma turma</option>
          {MOCK_TURMAS.map(turma => (
            <option key={turma.id} value={turma.id}>
              {turma.nome} ({turma.periodo})
            </option>
          ))}
        </select>
        
        <label htmlFor="presenca-data">Data:</label>
        <input 
          type="date" 
          id="presenca-data"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          disabled={loading}
        />
      </div>
      
      {loading ? (
        <div className="loading-indicator">
          <p>Carregando...</p>
        </div>
      ) : (
        <>
          {students.length > 0 && (
            <>
              <div className="bulk-actions">
                <button 
                  onClick={markAllPresent}
                  disabled={allPresent || loading}
                  className="action-button"
                >
                  Marcar Todos como Presentes
                </button>
              </div>
              
              <div className="lista-alunos-presenca">
                <table>
                  <thead>
                    <tr>
                      <th style={{ width: '60px' }}>Foto</th>
                      <th>Nome</th>
                      <th style={{ width: '120px' }}>Matrícula</th>
                      <th style={{ width: '120px' }}>Presença</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map(student => (
                      <tr key={student.id} className={student.presente ? 'present-row' : ''}>
                        <td>
                          <img 
                            src={student.foto} 
                            alt={`Foto de ${student.nome}`} 
                            className="student-avatar"
                            width="40"
                            height="40"
                          />
                        </td>
                        <td>{student.nome}</td>
                        <td>{student.matricula}</td>
                        <td>
                          <label className="attendance-checkbox">
                            <input
                              type="checkbox"
                              checked={student.presente}
                              onChange={() => toggleAttendance(student.id)}
                            />
                            <span className={`status-badge ${student.presente ? 'present' : 'absent'}`}>
                              {student.presente ? 'Presente' : 'Ausente'}
                            </span>
                          </label>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="attendance-summary">
                <p>
                  <strong>Resumo:</strong> {students.filter(s => s.presente).length} presentes 
                  de {students.length} alunos 
                  ({Math.round((students.filter(s => s.presente).length / students.length) * 100)}%)
                </p>
              </div>
              
              <button 
                className="save-button"
                onClick={saveAttendance}
                disabled={loading}
              >
                {loading ? 'Salvando...' : 'Salvar Presença'}
              </button>
            </>
          )}
          
          {selectedClass && students.length === 0 && !loading && (
            <p className="empty-message">Nenhum aluno encontrado para esta turma.</p>
          )}
          
          {!selectedClass && (
            <div className="instruction-box">
              <p>Selecione uma turma para visualizar a lista de alunos e registrar presenças.</p>
            </div>
          )}
        </>
      )}

      {/* Botão para voltar ao dashboard do professor */}
      <button 
        onClick={() => navigate('/dashboard')}
        style={{ marginTop: '20px' }}
      >
        Voltar para o Dashboard
      </button>
    </div>
  );
};

export default LancarPresenca;
