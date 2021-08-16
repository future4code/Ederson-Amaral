import React, {useState} from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import axios from "axios";

export const GlobalState = () => {

   const [Pokemon, setPokemon] = useState()

    const GetPokemons = () => {
      axios.get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err.response.message)
      })
    }

    return(
        <div>

        </div>
    )
}

