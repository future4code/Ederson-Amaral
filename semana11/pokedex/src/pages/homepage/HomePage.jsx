import React from "react"
import { useHistory } from "react-router-dom"
import Footer from "../../components/Footer/Footer"
import {Header} from '../../components/header/Header'
import { Routes } from "../../routes/Routes"
import { FooterDaHome } from "../../components/footerDaHome/FooterDaHome"

export const HomePage = () => {
//     const history = useHistory()


//     const goToPokedex = () => {
//         history.push("/pokedex")
//     }

//     const goToPokemons = () => {
//         history.push("/list")
//     }

    return (
        <div>
            <Header/>
            <FooterDaHome/>
        </div>
    )
    }