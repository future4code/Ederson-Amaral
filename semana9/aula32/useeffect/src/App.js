import './App.css';
import React, { useState, useEffect} from "react";
import axios from "axios";
import { PokeCard } from "./components/PokeCard/Pokecard";

export default function App () {

  const [pokeList, setPokeList] = useState ([])
  const [pokeName, setPokeName] = useState ("")
  
  const listaPokemon = () => {
    setPokeList(listaPokemon)
  }

  const nomePokemon = () => {
    setPokeName(nomePokemon)
  }

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => {        
        setPokeList(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  changePokeName = event => {
    setPokeName(event.target.value);
  };
 
    return (
      <div className="App">        
        <select onChange={this.changePokeName}>
          <option value={""}>Nenhum</option>          
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>        
        {pokeName && <PokeCard pokemon={pokeName} />}
      </div>
    );
}



