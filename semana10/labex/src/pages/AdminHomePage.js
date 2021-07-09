import React from 'react';
import { useHistory } from 'react-router-dom';
import useProtectedPage from '../hooks/useProtectedPage';
import AdminTripCard from '../components/AdminTripCard/AdminTripCard';
import useRequestData from '../hooks/useRequestData';
import { goToHomePage, goToCreateTripPage } from '../route/Coordinator';
import { logout } from '../services/Requests';

const AdminHomePage = () => {
    const history = useHistory ()
    useProtectedPage()
    const [tripsData, getTrips] = useRequestData('/trips', {})

    const tripsList = tripsData.trips && tripsData.trips.map((trips) => {
        return <AdminTripCard key={trips.id} name={trips.name} id={trips.id} getTrips={getTrips} />
    })

    return (
        <div>
        <p>Menu do Administrador</p>
        <button onClick={() => goToHomePage(history)}>Voltar</button>
        <button onClick={() => goToCreateTripPage(history)}>Criar Viagem</button>        
        <button onClick={() => logout(history)}>Logoff</button>                
        {tripsList && tripsList.length > 0 ? tripsList : <p>Please Wait...</p>}
        </div>
    )
}

export default AdminHomePage