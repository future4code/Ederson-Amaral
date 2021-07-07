import React from 'react'
import { useHistory } from 'react-router-dom';

export const HomePage = () => {
    const history = useHistory ()

    const goToListTripsPage = () => {
        history.push('/trips/list')
    }

    const goToLoginPage = () => {
        history.push('/login')
    }

    return (
        <div>
        <h1>LabeX</h1>
        <p>As melhores viagens espaciais, você encontra aqui</p>
        <button onClick={goToListTripsPage}>Lista de Viagens</button>
        <button onClick={goToLoginPage}>Acesso Administrador</button>
        </div>
        
    )
}