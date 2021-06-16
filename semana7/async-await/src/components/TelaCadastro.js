import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
// import GlobalStyle from './GlobalStyles';

const Container = styled.div`
    display: flex;
    margin: 30px auto;
    justify-content: center;
    -webkit-box-pack: center;

    .botao {
        background-color: hsl(236,32%,26%);
        z-index: 1;
        position: relative;
        color: white;
        padding: 0.5em 1em;
        cursor: pointer;        
    }
    .dados {
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        width: 20%;
        margin: 0 auto;
        padding: 30px;        
        background-color: #EFEFEF;        
    }
    .dados div{
        display: flex;
        justify-content: center;
        margin-bottom: 15px;        
    }
`;

class TelaCadastro extends React.Component {
    state = {
        nome: '',
        email: ''
    }

    handleNome = (event) => {
        this.setState({ nome: event.target.value })
    }


    handleEmail = (event) => {
        this.setState({ email: event.target.value })
    }

    fazerCadastro = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        const body = {
            name: this.state.nome,
            email: this.state.email
        }
        axios.post(url, body, {
            headers: {
                Authorization: 'ederson-amaral-molina'
            }
        })
            .then((res) => {
                alert('Usuário(a) cadastrado(a) com sucesso!')
                this.setState({ nome: '', email: '' })
            })

            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    render() {
        return (
            <div>
                {/* <GlobalStyle /> */}
                <button onClick={this.props.irParaLista}>Ir para Lista de Usuários</button>               
                    <h2>Cadastro</h2>
                    <Container>
                    <div className='dados'>
                        <div>
                            <input placeholder={'Nome'} value={this.state.nome} onChange={this.handleNome} />
                        </div>
                        <div>
                            <input placeholder={'Email'} value={this.state.email} onChange={this.handleEmail} />
                        </div>
                        <div>
                        <button className='botao' onClick={this.fazerCadastro}>Cadastrar</button>
                        </div>
                    </div>                    
                </Container>
            </div>
        )
    }
}
export default TelaCadastro;
