import React from 'react';
import { useHistory } from 'react-router-dom';
import useRequestData from '../hooks/useRequestData';
import { goToHomePage, goToApplicationFormPage } from '../route/Coordinator';
import TripCard from '../components/TripCard/TripCard';

const ListTripsPage = () => {
    const history = useHistory ()
    const [tripsData] = useRequestData("/trips", {})
    
    const tripsList = tripsData.trips && tripsData.trips.map((trips) => {
        return <TripCard key={trips.id} trip={trips} />
    })

    return (
        <div>
        <button onClick={() => goToHomePage(history)}>Voltar</button>
        <button onClick={() => goToApplicationFormPage(history)}>Inscreva-se</button>
        <p>Viagens disponíveis</p>
        {tripsList && tripsList.length > 0 ? tripsList : <p>Please Wait...</p>}
        </div>
    )
}

export default ListTripsPage