# 📘 Sistema de Gestão Escolar -- Professor

Este projeto é uma aplicação **React** integrada ao **Firebase** que
permite ao professor acessar suas turmas, registrar presença, lançar
notas e acompanhar o desempenho dos alunos.\
A interface é simples e intuitiva, feita com **React, HTML, CSS** e
**React Router**.

------------------------------------------------------------------------

## 🚀 Funcionalidades

-   **Autenticação de Usuário (Firebase Auth)**\
    Login do professor com e-mail e senha.

-   **Dashboard do Professor**\
    Menu com atalhos para as principais funcionalidades.

-   **Gerenciamento de Turmas e Calendário (Firebase Firestore)**\
    Consulta das turmas associadas ao professor e calendário de aulas.

-   **Lançamento de Presença**\
    Seleção da turma e registro da frequência dos alunos com resumo
    automático.

-   **Acompanhamento de Alunos**\
    Lista de alunos com informações de matrícula, turma, desempenho e
    frequência.

-   **Mensagens**\
    Exibição de comunicados internos para professores.

------------------------------------------------------------------------

## 🛠️ Tecnologias Utilizadas

-   [React](https://react.dev/) (componentes e hooks)\
-   [React Router DOM](https://reactrouter.com/) (navegação)\
-   [Firebase Authentication](https://firebase.google.com/docs/auth)\
-   [Firebase Firestore](https://firebase.google.com/docs/firestore)\
-   **HTML5 e CSS3** (estrutura e estilo)

------------------------------------------------------------------------

## 📂 Estrutura Simplificada

    src/
     ├── components/
     │    ├── Login.js
     │    ├── DashboardProfessor.js
     │    ├── AcompanharAlunosPage.js
     │    ├── LancarPresenca.js
     │    ├── Mensagens.js
     │    ├── TurmasCalendario.js
     │
     ├── firebase/
     │    └── config.js   # Configuração do Firebase
     │
     ├── App.js           # Definição das rotas
     └── index.js         # Ponto de entrada

------------------------------------------------------------------------

## ⚙️ Como Rodar Localmente

1.  **Clonar o repositório**

    ``` bash
    git clone https://github.com/ercck/gerenciador-cadastros
    cd seu-repositorio
    ```

2.  **Instalar dependências**

    ``` bash
    npm install
    ```

3.  **Configurar Firebase**\
    Crie um projeto no [Firebase
    Console](https://console.firebase.google.com/), ative
    **Authentication** e **Firestore**.\
    No arquivo `src/firebase/config.js`, insira as credenciais do seu
    app Firebase:

    ``` js
    import { initializeApp } from "firebase/app";
    import { getAuth } from "firebase/auth";
    import { getFirestore } from "firebase/firestore";

    const firebaseConfig = {
      apiKey: "SUA_API_KEY",
      authDomain: "SEU_PROJECT_ID.firebaseapp.com",
      projectId: "SEU_PROJECT_ID",
      storageBucket: "SEU_PROJECT_ID.appspot.com",
      messagingSenderId: "SEU_SENDER_ID",
      appId: "SEU_APP_ID"
    };

    const app = initializeApp(firebaseConfig);

    export const auth = getAuth(app);
    export const db = getFirestore(app);
    ```

4.  **Rodar o servidor**

    ``` bash
    npm run dev
    ```

    O projeto rodará em `http://localhost:5173/` (ou porta definida pelo
    Vite).

------------------------------------------------------------------------

## 👨‍🏫 Usuário de Teste

No Firebase, crie um usuário de teste (exemplo:
`professor@escola.com / 123456`) para acessar o sistema.

------------------------------------------------------------------------

## 📌 Próximos Passos / Melhorias

-   Integração com banco de dados real (Firestore) em todas as
    funcionalidades.\
-   Upload de arquivos (ex.: trabalhos e comunicados).\
-   Dashboard de gráficos com desempenho dos alunos.\
-   Sistema de notificações em tempo real.

------------------------------------------------------------------------

📄 Licença: MIT

