import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function DashboardProfessor() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const goToTurmasCalendario = () => {
    navigate('/turmas-calendario');
  };

  const goToLancarNotas = () => {
   
  };

  const goToAcompanharAlunos = () => {
    
  };

  const goToMensagens = () => {
    
  };

  return (
    <div className="card">
      <h2>Bem-vindo, Professor Rafael!</h2>
      <p>O que você gostaria de fazer hoje?</p>
      <button onClick={goToTurmasCalendario}>Turmas e Calendário</button>
      <button onClick={goToLancarNotas}>Lançar Notas e Presenças</button>
      <button onClick={goToAcompanharAlunos}>Acompanhar Alunos</button>
      <button onClick={goToMensagens}>Mensagens</button>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}