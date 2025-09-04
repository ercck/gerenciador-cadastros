import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Mensagens() {
  const navigate = useNavigate();

  const novaMensagem = {
    titulo: "Comunicado da Diretoria",
    texto: "Reunião marcada para sexta-feira dia 05/09/2025 às 14hrs na sala dos professores.",
    data: "03/09/2025"
  };

  return (
    <div style={{
      maxWidth: '900px',
      margin: '40px auto',
      padding: '0 16px',
      border: '2px solid #ccc',
      borderRadius: '12px',
      background: '#fff'
    }}>
      <h2 style={{ textAlign: 'center', margin: '0 0 20px 0' }}>Mensagens</h2>
      <div style={{
        marginBottom: '20px',
        background: '#ffeaea',
        border: '1px solid #f99',
        borderRadius: '8px',
        padding: '16px'
      }}>
        <strong>{novaMensagem.titulo}</strong>
        <p>{novaMensagem.texto}</p>
        <small>{novaMensagem.data}</small>
      </div>
      <div style={{ marginBottom: '20px' }}>
      </div>
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
