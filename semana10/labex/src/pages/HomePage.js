import React from 'react'
import { useHistory } from 'react-router-dom';
import { goToListTripsPage, goToLoginPage } from '../route/Coordinator';

const HomePage = () => {
    const history = useHistory ()  

    return (
        <div>
        <h1>LabeX</h1>
        <p>As melhores viagens espaciais você encontra aqui</p>
        <button onClick={() => goToListTripsPage(history)}>Lista de Viagens</button>
        <button onClick={() => goToLoginPage(history)}>Área Admin</button>
        </div>
        
    )
}

export default HomePage