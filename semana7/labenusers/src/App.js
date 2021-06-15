import React from 'react';
// import Cadastro from './components/Cadastro';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Telalogin = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 20%;
    margin: auto;
    padding: 30px; 
`; 

function App() {
  return (
    <div className="App">
      <button>
        <p>
          'Ir para página de lista'
        </p>
      </button>
      <header className="Formulario">
        <div className="Telalogin" alt="Tela de Login">
          <label forhtml='name'>Nome: </label>
          <input required id='name' name='name' type='text' value></input>
        </div>
        <div>
          <label forhtml='email'>E-mail: </label>
          <input required id='email' name='email' type='email' value></input>
        </div>
        <button class='Salvar'>'Salvar'</button>
      </header>
    </div >
  );
}

export default App;
