import TextField from '@material-ui/core/TextField'
import React from 'react'
import { InputsContainer, SignUpFormContainer } from './styled'
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'

const RegisterForm = () => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({ username: '', email: '', password: '' })

    const onSubmitForm = (event) => {
        event.preventDefault()
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
            </SignUpFormContainer> 
            </form>
    )
}

export default RegisterForm