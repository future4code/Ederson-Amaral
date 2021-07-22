import React from 'react'
import { ScreenContainer, SignUpButtonContainer, LogoImage } from './styled'
import logo from '../../assets/logo.png'
import Button from '@material-ui/core/Button'
import RegisterForm from './RegisterForm'
import { useHistory } from 'react-router-dom'
import { goToFeed } from '../../routes/coordinator'

const RegisterPage = () => {
    const history = useHistory()
    return (
        <ScreenContainer>
        <LogoImage src={logo}/>
           <RegisterForm/>
            <SignUpButtonContainer>
                <Button
                    type={'submit'}
                    fullWidth
                    variant={'contained'}
                    color={'primary'}                    
                    onClick={() => goToFeed(history)}
                >
                    Cadastrar
                </Button>
            </SignUpButtonContainer>
        </ScreenContainer>

    )
}

export default RegisterPage