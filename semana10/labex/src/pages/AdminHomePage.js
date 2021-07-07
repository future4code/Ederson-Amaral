import React from 'react';
import { useHistory } from 'react-router-dom';
import { TripDetailsPage } from './TripDetailsPage';

export const AdminHomePage = () => {
    const history = useHistory ()

    const goToCreateTripPage = () => {
        history.push('/admin/trips/create')
    }

    const goToAdminHomePage = () => {
        history.push('/admin/trips/list')
    }

    return (
        <div>
        <p>Menu do Administrador</p>
        <button onClick={goToAdminHomePage}>Voltar</button>
        <button onClick={goToCreateTripPage}>Criar Viagem</button>        
        <button>Logout</button>
        <TripDetailsPage />        
        </div>
    )
}