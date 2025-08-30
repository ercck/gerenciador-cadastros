import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function DashboardProfessor() {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert('Logout realizado!');
    navigate('/');
  };

  const goToTurmasCalendario = () => {
    alert('Indo para Turmas e Calendário!');
  };

  const goToLancarNotas = () => {
    alert('Indo para Lançar Notas e Presenças!');
  };

  const goToAcompanharAlunos = () => {
    alert('Indo para Acompanhar Alunos!');
  };

  const goToMensagens = () => {
    alert('Indo para Mensagens!');
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