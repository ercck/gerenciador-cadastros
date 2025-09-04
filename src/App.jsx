import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import DashboardProfessor from './pages/DashboardProfessor';
import TurmasCalendario from './pages/TurmasCalendario';
import './styles.css';
import LancarPresencaPage from './pages/LancarPresencaPage';
import LancarNotasPage from './pages/LancarNotasPage';
import AcompanharAlunosPage from './pages/AcompanharAlunosPage';
import Mensagens from './pages/MensagensPage';  

export default function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<DashboardProfessor />} />
          <Route path="/turmas-calendario" element={<TurmasCalendario />} />
          <Route path="/lancar-presenca" element={<LancarPresencaPage />} />
          <Route path="/lancar-notas" element={<LancarNotasPage />} />
          <Route path="/acompanhar-alunos" element={<AcompanharAlunosPage />} />
          <Route path="/mensagens" element={<Mensagens />} />
        </Routes>
      </div>
    </Router>
  );
}
