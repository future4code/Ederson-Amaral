import React from 'react';
import { useHistory } from 'react-router-dom';

export const ApplicationFormPage = () => {
    const history = useHistory ()

    const goToHomePage = () => {
        history.push('/')
    }

    return (
        <div>
        <p>FORMULÁRIO</p>
        <button onClick={goToHomePage}>Voltar</button>
        </div>
    )
}


