import axios from 'axios'
import React, { useEffect } from 'react'
import { useProtectedPage } from '../hooks/ProtectedPage'

export const TripDetailsPage = () => {
    useProtectedPage()    

    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/ederson-amaral-molina/trip/:id', {
            headers: {
                auth: token
            }
        }).then((response) => {
            console.log('Ok', response.data)
        }).catch((error) => {
            console.log('Falha', error.response)
        })
    })
    return (
        <div>
        <p>DETALHES DE VIAGENS</p>
        </div>
    )
}