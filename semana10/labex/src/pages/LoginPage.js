import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory ()

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const goToAdminHomePage = () => {
       
        const body = {
            email: email,
            password: password
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/ederson-amaral-molina/login', body)
        .then((response) => {            
            localStorage.setItem('token', response.data.token)
            history.push('/admin/trips/list')
        }).catch((error) => {
            alert('usuário ou senha incorretos', error.response)            
        })        
    }

    const goToHomePage = () => {
        history.push('/')
    }

    return (
        <div>
        <p>LOGIN</p>       
        <input 
        placeholder='email'
        type='email'
        required
        value={email}
        onChange={onChangeEmail}        
        />
        <input
        placeholder='password'
        type='password'
        required
        value={password}
        onChange={onChangePassword}
        />        
        <button onClick={goToHomePage}>Voltar</button>
        <button onClick={goToAdminHomePage}>Login</button>               
        </div>
    )
}