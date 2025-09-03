import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import DashboardProfessor from './pages/DashboardProfessor';
import './styles.css';
import LancarPresencaPage from './pages/LancarPresencaPage';
import LancarNotasPage from './pages/LancarNotasPage';

export default function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<DashboardProfessor />} />
          <Route path="/lancar-presenca" element={<LancarPresencaPage />} />
          <Route path="/lancar-notas" element={<LancarNotasPage />} />
        </Routes>
      </div>
    </Router>
  );
}