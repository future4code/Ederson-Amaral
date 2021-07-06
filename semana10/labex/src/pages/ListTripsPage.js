import React from 'react';
import { useHistory } from 'react-router-dom';

export const ListTripsPage = () => {
    const history = useHistory ()

    const goToApplicationFormPage = () => {
        history.push('/trips/application')
    }

    const goToHomePage = () => {
        history.push('/')
    }

    return (
        <div>
        <p>LISTA DE VIAGENS</p>
        <button onClick={goToHomePage}>Voltar</button>
        <button onClick={goToApplicationFormPage}>Inscreva-se para Viagem</button>
        </div>
    )
}