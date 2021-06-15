import React from 'react';
import App from './App';
import axios from 'axios';
import styled from 'styled-components';

function Cadastro (){
    return (
        <div className='Cadastro-geral'>
            <ul class='Usuarios-cadastrados'>
                <h2>Usuários Cadastrados:</h2>
                <li class='User'>''<span class='User1'>X</span></li>
            </ul>
        </div>
    )
}

export default Cadastro;
