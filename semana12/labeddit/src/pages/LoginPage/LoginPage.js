import React from 'react'
import { ScreenContainer, SignUpButtonContainer, LogoImage } from './styled'
import Button from '@material-ui/core/Button'
import LoginForm from './LoginForm'
import { useHistory } from 'react-router-dom'
import { goToRegister } from '../../routes/coordinator'
import logo from '../../assets/logo.png'

const LoginPage = () => {
    const history = useHistory()
    return (
        <ScreenContainer>
        <LogoImage src={logo} />
           <LoginForm/>
            <SignUpButtonContainer>
                <Button
                    type={'submit'}
                    fullWidth
                    variant={'text'}
                    color={'primary'}
                    margin={'normal'}
                    onClick={() => goToRegister(history)}
                >
                    Cadastrar
                </Button>
            </SignUpButtonContainer>
        </ScreenContainer>

    )
}

export default LoginPage