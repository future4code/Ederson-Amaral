import React from 'react'
import { ScreenContainer, SignUpButtonContainer, LogoImage } from './styled'
import Button from '@material-ui/core/Button'
import LoginForm from './LoginForm'
import { useHistory } from 'react-router-dom'
import { goToRegister } from '../../routes/coordinator'
import logo from '../../assets/logo.png'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const LoginPage = ({setRightButtonText}) => {
    useUnprotectedPage()
    const history = useHistory()
    return (
        <ScreenContainer>
        <LogoImage src={logo} />
           <LoginForm setRightButtonText={setRightButtonText} />
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