import React from 'react'
import { ScreenContainer, LogoImage } from './styled'
import logo from '../../assets/logo.png'
import RegisterForm from './RegisterForm'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'


const RegisterPage = ({setRightButtonText}) => {
    useUnprotectedPage()
    return (
        <ScreenContainer>
        <LogoImage src={logo}/>
           <RegisterForm setRightButtonText={setRightButtonText}/>         
        </ScreenContainer>

    )
}

export default RegisterPage