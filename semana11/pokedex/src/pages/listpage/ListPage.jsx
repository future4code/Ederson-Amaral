import React from "react"
import { useHistory } from "react-router-dom"
// import { useEffect, useState } from "react"
// import axios from "axios"
import { Header } from "../../components/header/Header"
import { Routes } from "../../routes/Routes"

export const ListPage = () => {

    // const [pokemons, setPokemons] = useState()
    // const [pokeData, setData] = useState([])
    // const [pokemonType, setPokemonType] = useState("")

    // useEffect(() => {
    //     axios.get("https://pokeapi.co/api/v2/pokemon/")
    //     .then((res) => setPokemons(res.data.results))
    //     .catch((err) => {
    //         console.log(err)
    //     })
    // }, [])

    // console.log(pokemons)

    // const newList = pokemons.map(function(item,indice){
    //     return <p>`{item.name}`</p>;
    // })

    // console.log(newList)

    // const history = useHistory()

    // const goToBack = () => {
    //     history.push("/")
    // }
    


    return (
        
        <div>
            {/* <p> nome: {newList.name}</p> */}
                         
           <p>LISTA DE POKEMONS</p>
            <button>VOLTAR</button>
        </div>
    )
}