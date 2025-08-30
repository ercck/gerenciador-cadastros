import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import DashboardProfessor from './pages/DashboardProfessor';
import './styles.css';

export default function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<DashboardProfessor />} />
        </Routes>
      </div>
    </Router>
  );
}