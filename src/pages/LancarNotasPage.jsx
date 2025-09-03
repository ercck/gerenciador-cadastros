import React, { useState, useEffect } from 'react';

const LancarNotas = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedEvaluation, setSelectedEvaluation] = useState('');
  const [showEvaluationForm, setShowEvaluationForm] = useState(false);
  
  const [students, setStudents] = useState([]);
  
  const [newEvaluation, setNewEvaluation] = useState({
    nome: '',
    tipo: 'Avaliação',
    data: '',
    peso: '',
    notaMaxima: ''
  });
  
  const [evaluations, setEvaluations] = useState([]);

  useEffect(() => {
    if (selectedClass) {
      fetchEvaluations(selectedClass);
    }
  }, [selectedClass]);

  useEffect(() => {
    if (selectedEvaluation) {
      fetchStudentsWithGrades(selectedClass, selectedEvaluation);
    }
  }, [selectedEvaluation]);

  const fetchEvaluations = async (classId) => {
    try {
      // Trocar pra api
      const response = await fetch(`/api/turmas/${classId}/avaliacoes`);
      const data = await response.json();
      setEvaluations(data);
      setSelectedEvaluation(''); // Reset selected evaluation
      setStudents([]); // Clear student list
    } catch (error) {
      console.error('Error fetching evaluations:', error);
    }
  };

  const fetchStudentsWithGrades = async (classId, evaluationId) => {
    try {
      // Trocar pra api
      const response = await fetch(`/api/turmas/${classId}/avaliacoes/${evaluationId}/alunos`);
      const data = await response.json();
      
      const studentsWithGrades = data.map(student => ({
        ...student,
        nota: student.nota || ''
      }));
      
      setStudents(studentsWithGrades);
    } catch (error) {
      console.error('Error fetching students with grades:', error);
    }
  };

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  };

  const handleEvaluationChange = (e) => {
    setSelectedEvaluation(e.target.value);
  };

  const toggleEvaluationForm = () => {
    setShowEvaluationForm(!showEvaluationForm);
  };

  const handleNewEvaluationChange = (e) => {
    const { id, value } = e.target;
    setNewEvaluation({
      ...newEvaluation,
      [id.replace('nova-avaliacao-', '')]: value
    });
  };

  const saveNewEvaluation = async (e) => {
    e.preventDefault();
    
    if (!selectedClass) {
      alert('Por favor, selecione uma turma primeiro.');
      return;
    }

    try {
      const response = await fetch('/api/avaliacoes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          turmaId: selectedClass,
          nome: newEvaluation.nome,
          tipo: newEvaluation.tipo,
          data: newEvaluation.data,
          peso: parseFloat(newEvaluation.peso),
          notaMaxima: parseInt(newEvaluation.notaMaxima, 10)
        })
      });

      if (response.ok) {
        const savedEvaluation = await response.json();
        
        setEvaluations([...evaluations, savedEvaluation]);
        
        setSelectedEvaluation(savedEvaluation.id);
        
        setNewEvaluation({
          nome: '',
          tipo: 'Avaliação',
          data: '',
          peso: '',
          notaMaxima: ''
        });
        setShowEvaluationForm(false);
        
        alert('Avaliação criada com sucesso!');
      } else {
        alert('Erro ao criar avaliação. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Error creating evaluation:', error);
      alert('Erro ao criar avaliação. Por favor, tente novamente.');
    }
  };

  const handleGradeChange = (studentId, value) => {
    setStudents(students.map(student => 
      student.id === studentId ? { ...student, nota: value } : student
    ));
  };

  const saveGrades = async () => {
    if (!selectedClass || !selectedEvaluation) {
      alert('Por favor, selecione uma turma e uma avaliação.');
      return;
    }

    try {
      const response = await fetch(`/api/turmas/${selectedClass}/avaliacoes/${selectedEvaluation}/notas`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          notas: students.map(student => ({
            alunoId: student.id,
            nota: student.nota === '' ? null : parseFloat(student.nota)
          }))
        })
      });

      if (response.ok) {
        alert('Notas salvas com sucesso!');
        fetchStudentsWithGrades(selectedClass, selectedEvaluation);
      } else {
        alert('Erro ao salvar notas. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Error saving grades:', error);
      alert('Erro ao salvar notas. Por favor, tente novamente.');
    }
  };

  return (
    <div className="page">
      <h2>Lançamento de Notas</h2>
      
      <div className="controls">
        <label htmlFor="notas-turma-select">Turma:</label>
        <select 
          id="notas-turma-select"
          value={selectedClass}
          onChange={handleClassChange}
        >
          <option value="">Selecione uma turma</option>
          {/* TROCAR PELA API */}
          <option value="1">6º Ano - Matemática</option>
          <option value="2">7º Ano - Ciências</option>
          <option value="3">8º Ano - História</option>
        </select>
        
        {selectedClass && (
          <>
            <label htmlFor="notas-avaliacao-select">Avaliação:</label>
            <select 
              id="notas-avaliacao-select"
              value={selectedEvaluation}
              onChange={handleEvaluationChange}
            >
              <option value="">Selecione uma avaliação</option>
              {/* {evaluations.map(eval => (
                <option key={eval.id} value={eval.id}>
                  {eval.nome} ({eval.tipo}) - {new Date(eval.data).toLocaleDateString()}
                </option>
              ))} */}
            </select>
            
            <button 
              id="criar-avaliacao-btn"
              onClick={toggleEvaluationForm}
            >
              Criar Avaliação Rápida
            </button>
          </>
        )}
      </div>
      
      {showEvaluationForm && (
        <div id="criar-avaliacao-form" className="evaluation-form">
          <form onSubmit={saveNewEvaluation}>
            <input 
              type="text" 
              id="nova-avaliacao-nome" 
              placeholder="Nome da Avaliação"
              value={newEvaluation.nome}
              onChange={handleNewEvaluationChange}
              required 
            />
            
            <select 
              id="nova-avaliacao-tipo"
              value={newEvaluation.tipo}
              onChange={handleNewEvaluationChange}
              required
            >
              <option value="Avaliação">Avaliação</option>
              <option value="Entrega">Entrega</option>
            </select>
            
            <input 
              type="date" 
              id="nova-avaliacao-data"
              value={newEvaluation.data}
              onChange={handleNewEvaluationChange}
              required 
            />
            
            <input 
              type="number" 
              id="nova-avaliacao-peso" 
              placeholder="Peso"
              step="0.1" 
              value={newEvaluation.peso}
              onChange={handleNewEvaluationChange}
              required 
            />
            
            <input 
              type="number" 
              id="nova-avaliacao-notaMaxima" 
              placeholder="Nota Máxima"
              step="1" 
              value={newEvaluation.notaMaxima}
              onChange={handleNewEvaluationChange}
              required 
            />
            
            <button type="submit">Salvar Avaliação</button>
            <button type="button" onClick={toggleEvaluationForm}>Cancelar</button>
          </form>
        </div>
      )}
      
      {students.length > 0 && (
        <>
          <div id="tabela-alunos-notas" className="grades-table">
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Nota</th>
                </tr>
              </thead>
              <tbody>
                {students.map(student => {
                  const currentEvaluation = evaluations.find(e => e.id === selectedEvaluation);
                  const maxGrade = currentEvaluation ? currentEvaluation.notaMaxima : 10;
                  
                  return (
                    <tr key={student.id}>
                      <td>{student.nome}</td>
                      <td>
                        <input
                          type="number"
                          min="0"
                          max={maxGrade}
                          step="0.5"
                          value={student.nota}
                          onChange={(e) => handleGradeChange(student.id, e.target.value)}
                          placeholder={`0-${maxGrade}`}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          
          <button 
            className="save-button"
            onClick={saveGrades}
          >
            Salvar Notas
          </button>
        </>
      )}
      
      {selectedClass && selectedEvaluation && !students.length && (
        <p>Carregando alunos...</p>
      )}
      
      {!selectedClass && (
        <p>Selecione uma turma para continuar.</p>
      )}
      
      {selectedClass && !selectedEvaluation && (
        <p>Selecione uma avaliação ou crie uma nova.</p>
      )}
    </div>
  );
};

export default LancarNotas;