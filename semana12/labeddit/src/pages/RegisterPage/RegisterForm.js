import TextField from '@material-ui/core/TextField'
import React, {useState} from 'react'
import { InputsContainer, SignUpFormContainer } from './styled'
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import {signUp} from "../../services/users"

const RegisterForm = ({setRightButtonText}) => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({ username: '', email: '', password: '' })
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, history, setRightButtonText, setIsLoading)        
    }

    return (
        <form onSubmit={onSubmitForm}>
            <SignUpFormContainer>
                <InputsContainer>
                    <TextField
                        name={'username'}
                        value={form.username}
                        onChange={onChange}
                        label={'Nome do Usuário'}
                        variant={'outlined'}
                        fullWidth
                        margin={'normal'}
                        required
                        autoFocus
                    />
                    <TextField
                        name={'email'}
                        value={form.email}
                        onChange={onChange}
                        label={'E-mail'}
                        variant={'outlined'}
                        fullWidth
                        margin={'normal'}
                        required
                        type={'email'}
                    />
                    <TextField
                        name={'password'}
                        value={form.password}
                        onChange={onChange}
                        label={'Senha'}
                        variant={'outlined'}
                        fullWidth
                        margin={'normal'}
                        required
                        type={'password'}
                    />
                </InputsContainer>
                <Button
                    color={'primary'}
                    variant={'contained'}
                    type={'submit'}
                    fullWidth
                >
                    {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Cadastrar</>}
                </Button>
            </SignUpFormContainer>
        </form>
    )
}

export default RegisterForm