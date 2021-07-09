import React from 'react';
import { useHistory, useParams } from "react-router-dom";
import useProtectedPage from '../hooks/useProtectedPage';
import useRequestData from '../hooks/useRequestData';
import { goToAdminHomePage } from '../route/Coordinator';
import CandidateCard from '../components/CandidateCard/CandidateCard';

const TripDetailsPage = () => {
    useProtectedPage()
    const history = useHistory()
    const { id } = useParams()
    const [tripDetails, getTripDetails] = useRequestData(`/trip/${id}`)

    const candidates = tripDetails && tripDetails.trip && tripDetails.trip.candidates.map((candidates) => {
        return <CandidateCard key={candidates.id} candidate={candidates} tripId={id} getTripDetails={getTripDetails} />
    })

    const approvedCandidates = tripDetails && tripDetails.trip && tripDetails.trip.approved.map((candidates) => {
        return <li key={candidates.id}>{candidates.name}</li>
    })

    return (
        <div>
            {tripDetails && tripDetails.trip && <h1>{tripDetails.trip.name}</h1>}
            {tripDetails && tripDetails.trip && <div>
                <p><b>Nome:</b> {tripDetails.trip.name}</p>
                <p><b>Descrição:</b> {tripDetails.trip.description}</p>
                <p><b>Planeta:</b> {tripDetails.trip.planet}</p>
                <p><b>Duração:</b> {tripDetails.trip.durationInDays}</p>
                <p><b>Data:</b> {tripDetails.trip.date}</p>
            </div>}
            <button onClick={() => goToAdminHomePage(history)}>Voltar</button>

            <h2>Candidatos Pendentes</h2>
            {candidates && candidates.length > 0 ? candidates : <p>Não há candidatos pendentes</p>}

            <h2>Candidatos Aprovados</h2>
            {approvedCandidates && approvedCandidates.length > 0 ? approvedCandidates : <p>Não há candidatos aprovados</p>}
        </div>
    )
}

export default TripDetailsPage
