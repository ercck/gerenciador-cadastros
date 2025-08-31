import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Tentando login com:', email, password);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Login realizado:", userCredential.user);
        alert('Login bem-sucedido!');
        navigate('/dashboard');
      })
      .catch((error) => {
        console.error("Erro no login:", error);
        alert('Email ou senha incorretos.');
      });
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
