import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Tentando login com:', email, password);

    // Simulação de login bem-sucedido para testar a navegação
    if (email === 'professor@escola.com' && password === 'senha123') {
      alert('Login bem-sucedido!');
      navigate('/dashboard');
    } else {
      alert('Email ou senha incorretos.');
    }
  };

  return (
    <div className="card">
      <h2>Login do Professor</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}