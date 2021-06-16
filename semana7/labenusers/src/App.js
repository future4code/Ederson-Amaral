import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import TelaCadastro from './components/TelaCadastro';
import TelaListaUsuarios from './components/TelaListaUsuario';

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

class App extends React.Component {
  state = {
    telaAtual: 'cadastro'
  }

  escolheTela = () => {
    switch (this.state.telaAtual){
      case 'cadastro':
        return  <TelaCadastro irParaLista={this.irParaLista}/>
      case 'lista':
        return <TelaListaUsuarios irParaCadastro={this.irParaCadastro}/>
      default:
        return <div>Erro! Página não encontrada :</div>
    }
  }

  irParaCadastro = () => {
    this.setState({telaAtual: 'cadastro'})
  }

  irParaLista = () => {
    this.setState({telaAtual: 'lista'})
  }

  render() {
    return (
      <div>
        {this.escolheTela()}        
      </div>      
    );
  }
}

export default App;
