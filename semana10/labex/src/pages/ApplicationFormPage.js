import React from 'react'
import useForm from '../hooks/useForm'
import useRequestData from '../hooks/useRequestData'
import { sendApplication } from '../services/Requests'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { goToListTripsPage } from '../route/Coordinator'
import { countries } from '../constants/countries';

const ApplicationFormPage = () => {
    const [tripId, setTripId] = useState("")
    const { form, onChange, clear } = useForm({ name: "", age: "", applicationText: "", profession: "", country: "" })
    const [allTrips] = useRequestData("/trips", {})
    const history = useHistory()

    const clearFields = () => {
        clear()
        setTripId("")
    }

    const onClickSend = (event) => {
        event.preventDefault()
        sendApplication(form, tripId, clearFields)
    }

    const onChangeTrip = (event) => {
        setTripId(event.target.value)
    }

    const tripsOptions = allTrips.trips && allTrips.trips.map((trips) => {
        return <option key={trips.id} value={trips.id}>{trips.name}</option>
    })

    return (
       <div>
            <h1>Candidate-se para uma viagem</h1>
            <form onSubmit={onClickSend}>
                <select defaultValue="" onChange={onChangeTrip}>
                    <option value="" disabled>Escolha uma Viagem</option>
                    {tripsOptions}
                </select>
                <input
                    placeholder={"Digite o seu nome"}
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    pattern={"^.{3,}$"}
                    title={"Atenção, o nome deve ter no mínimo 3 caracteres!"}
                    required
                />
                <input
                    placeholder={"Digite a sua idade"}
                    type={"number"}
                    name={"age"}
                    value={form.age}
                    onChange={onChange}
                    required
                    min={18}
                />
                <input
                    placeholder={"Explique o motivo da sua candidatura"}
                    name={"applicationText"}
                    value={form.applicationText}
                    onChange={onChange}
                    required
                    pattern={"^.{20,}$"}
                    title={"O texto deve ter no mínimo 20 caracteres"}
                />
                <input
                    placeholder={"digite a sua profissão"}
                    name={"profession"}
                    value={form.profession}
                    onChange={onChange}
                    required
                    pattern={"^.{3,}$"}
                    title={"A profissão deve ter no mínimo 3 caracteres"}
                />
                <select
                    placeholder={"País"}
                    name={"country"}
                    value={form.country}
                    onChange={onChange}
                    required
                >
                    <option value={""} disabled>Escolha um País</option>
                    {countries.map((country) => {
                        return <option value={country} key={country}>{country}</option>
                    })}
                </select>
                
                    <button onClick={() => goToListTripsPage(history)}>Voltar</button>
                    <button type={"submit"}>Enviar</button>
               
            </form>
            </div>
    )
}

export default ApplicationFormPage
