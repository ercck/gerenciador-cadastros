import React from 'react';
import { useNavigate } from 'react-router-dom';

const MOCK_ALUNOS = [
  { id: 101, nome: 'Ana Clara Silva', matricula: '2023001', turma: '6º Ano A', desempenho: 'Ótimo', frequencia: 'Boa frequência', foto: 'https://randomuser.me/api/portraits/women/32.jpg' },
  { id: 102, nome: 'Bruno Oliveira Santos', matricula: '2023002', turma: '6º Ano A', desempenho: 'Bom', frequencia: 'Baixa frequência', foto: 'https://randomuser.me/api/portraits/men/45.jpg' },
  { id: 103, nome: 'Carla Ferreira Lima', matricula: '2023003', turma: '7º Ano B', desempenho: 'Regular', frequencia: 'Regular', foto: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { id: 104, nome: 'Diego Almeida Costa', matricula: '2023004', turma: '7º Ano B', desempenho: 'Bom', frequencia: 'Boa frequência', foto: 'https://randomuser.me/api/portraits/men/22.jpg' },
  { id: 105, nome: 'Eduarda Martins', matricula: '2023005', turma: '8º Ano C', desempenho: 'Ótimo', frequencia: 'Baixa frequência', foto: 'https://randomuser.me/api/portraits/women/17.jpg' },
  { id: 106, nome: 'Fábio Pereira Gomes', matricula: '2023006', turma: '8º Ano C', desempenho: 'Regular', frequencia: 'Regular', foto: 'https://randomuser.me/api/portraits/men/67.jpg' },
  { id: 107, nome: 'Gabriela Souza', matricula: '2023007', turma: '9º Ano D', desempenho: 'Bom', frequencia: 'Boa frequência', foto: 'https://randomuser.me/api/portraits/women/55.jpg' },
  { id: 108, nome: 'Henrique Ribeiro', matricula: '2023008', turma: '9º Ano D', desempenho: 'Ótimo', frequencia: 'Baixa frequência', foto: 'https://randomuser.me/api/portraits/men/34.jpg' },
  { id: 109, nome: 'Isabel Fernandes', matricula: '2023009', turma: '6º Ano A', desempenho: 'Bom', frequencia: 'Boa frequência', foto: 'https://randomuser.me/api/portraits/women/8.jpg' },
  { id: 110, nome: 'João Pedro Lima', matricula: '2023010', turma: '7º Ano B', desempenho: 'Regular', frequencia: 'Regular', foto: 'https://randomuser.me/api/portraits/men/91.jpg' },
  { id: 111, nome: 'Karina dos Santos', matricula: '2023011', turma: '8º Ano C', desempenho: 'Ótimo', frequencia: 'Boa frequência', foto: 'https://randomuser.me/api/portraits/women/42.jpg' },
  { id: 112, nome: 'Lucas Andrade', matricula: '2023012', turma: '9º Ano D', desempenho: 'Bom', frequencia: 'Boa frequência', foto: 'https://randomuser.me/api/portraits/men/16.jpg' }
];

export default function AcompanharAlunosPage() {
  const navigate = useNavigate();

  return (
    <div style={{
      maxWidth: '900px',
      margin: '40px auto',
      padding: '0 16px',
      border: '2px solid #ccc',
      borderRadius: '12px',
      background: '#fff'
    }}>
      <h2 style={{ textAlign: 'center', margin: '0 0 20px 0' }}>Acompanhar Alunos</h2>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: '20px',
        background: '#fff'
      }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '2px solid #ccc', padding: '8px' }}>Foto</th>
            <th style={{ borderBottom: '2px solid #ccc', padding: '8px' }}>Nome</th>
            <th style={{ borderBottom: '2px solid #ccc', padding: '8px' }}>Matrícula</th>
            <th style={{ borderBottom: '2px solid #ccc', padding: '8px' }}>Turma</th>
            <th style={{ borderBottom: '2px solid #ccc', padding: '8px' }}>Desempenho</th>
            <th style={{ borderBottom: '2px solid #ccc', padding: '8px' }}>Frequência</th>
          </tr>
        </thead>
        <tbody>
          {MOCK_ALUNOS.map(aluno => (
            <tr key={aluno.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ textAlign: 'center', padding: '8px' }}>
                <img 
                  src={aluno.foto}
                  alt={`Foto de ${aluno.nome}`}
                  style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                />
              </td>
              <td style={{ padding: '8px', wordBreak: 'break-word' }}>{aluno.nome}</td>
              <td style={{ padding: '8px', textAlign: 'center', wordBreak: 'break-word' }}>{aluno.matricula}</td>
              <td style={{ padding: '8px', textAlign: 'center', wordBreak: 'break-word' }}>{aluno.turma}</td>
              <td style={{ padding: '8px', textAlign: 'center', wordBreak: 'break-word' }}>{aluno.desempenho}</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>
                <span style={{
                  color:
                    aluno.frequencia === 'Boa frequência' ? 'green' :
                    aluno.frequencia === 'Regular' ? 'orange' :
                    'red',
                  fontWeight: 'bold'
                }}>
                  {aluno.frequencia}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={() => navigate('/dashboard')}
        style={{
          display: 'block',
          margin: '0 auto 20px auto',
          width: '100%',
          maxWidth: '900px',
          padding: '12px',
          background: '#000',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        Voltar para o Dashboard
      </button>
    </div>
  );
}

