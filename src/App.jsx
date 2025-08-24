import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    cpf: "",
    email: "",
    endereco: "",
    telefone: "",
    nascimento: "",
    formacao: "",
    atuacao: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      {step === 1 && (
        <div className="card">
          <h2>Gerenciador de Cadastros</h2>
          <button onClick={() => setStep(2)}>Novo Cadastro</button>
          <button>Vinculação de Dados</button>
          <button>Edição de Cadastros</button>
          <button>Exclusão de Cadastros</button>
          <button>Sair</button>
        </div>
      )}

      {step === 2 && (
        <div className="card">
          <h2>Gerenciador de Cadastros</h2>
          <button onClick={() => setStep(3)}>Cadastro Professor</button>
          <button>Cadastro Fornecedor</button>
          <button>Cadastro Aluno</button>
          <button>Cadastro Pessoa Física/Jurídica</button>
          <button onClick={() => setStep(1)}>Retornar</button>
        </div>
      )}

      {step === 3 && (
        <div className="card">
          <h2>Cadastro Professor</h2>
          <input
            type="text"
            name="cpf"
            placeholder="CPF / CNPJ"
            value={formData.cpf}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="endereco"
            placeholder="Endereço"
            value={formData.endereco}
            onChange={handleChange}
          />
          <input
            type="text"
            name="telefone"
            placeholder="Telefone"
            value={formData.telefone}
            onChange={handleChange}
          />
          <input
            type="date"
            name="nascimento"
            value={formData.nascimento}
            onChange={handleChange}
          />
          <input
            type="text"
            name="formacao"
            placeholder="Formação Acadêmica"
            value={formData.formacao}
            onChange={handleChange}
          />
          <input
            type="text"
            name="atuacao"
            placeholder="Área de Atuação"
            value={formData.atuacao}
            onChange={handleChange}
          />
          <button onClick={() => setStep(4)}>Cadastrar Professor</button>
          <button onClick={() => setStep(2)}>Retornar</button>
        </div>
      )}

      {step === 4 && (
        <div className="card">
          <h2>Cadastro de professor realizado com sucesso!</h2>
          <button>Vincular os dados</button>
          <button onClick={() => setStep(1)}>Retornar ao menu</button>
          <button>Sair</button>
        </div>
      )}
    </div>
  );
}
