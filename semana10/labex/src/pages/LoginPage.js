import React from 'react';
import { useHistory } from 'react-router-dom';

export const LoginPage = () => {
    const history = useHistory ()

    const goToAdminHomePage = () => {
        history.push('/admin/trips/list')
    }

    const goToHomePage = () => {
        history.push('/')
    }

    return (
        <div>
        <p>LOGIN</p>
        <form>e-mail</form>
        <form>senha</form>
        <button onClick={goToHomePage}>Voltar</button>
        <button onClick={goToAdminHomePage}>LOGIN</button>        
        </div>
    )
}