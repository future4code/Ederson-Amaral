import React from "react"
import { Header } from "../../components/header/Header"
import styled from "styled-components"

const BotaoVoltar = styled.button `
background-color: #CF1834;
border: 1px solid black;
padding: 6px;
border-radius: 4px;
margin-left: 30vw;
`
const NamePokedex = styled.span`
margin-left: 45vw;
color: red;
`

export const PokedexPage = () => {

    // const history = useHistory()
    // const goToBack = () => {
    //     history.push("/")
    // }
    return (
        <div>
            
            <NamePokedex>POKEDEX</NamePokedex>
            <BotaoVoltar>VOLTAR</BotaoVoltar>
        </div>
    )
}