import React from 'react';
import { useHistory } from 'react-router-dom';

export const CreateTripPage = () => {
    const history = useHistory ()

    const goToHomePage = () => {
        history.push('/')
    }

    return (
        <div>
        <p>CRIAR VIAGENS</p>
        <button onClick={goToHomePage}>Voltar</button>
        </div>
    )
}