import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import DashboardProfessor from './pages/DashboardProfessor';
import TurmasCalendario from './pages/TurmasCalendario';
import './styles.css';

export default function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<DashboardProfessor />} />
          <Route path="/turmas-calendario" element={<TurmasCalendario />} />
        </Routes>
      </div>
    </Router>
  );
}