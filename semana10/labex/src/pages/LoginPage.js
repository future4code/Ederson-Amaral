import { useHistory } from 'react-router-dom';
import useForm from '../hooks/useForm';
import useUnprotectedPage from '../hooks/useUnprotectedPage';
import { login } from '../services/Requests';
import { goToHomePage } from '../route/Coordinator';
import React from 'react';

const LoginPage = () => {
    useUnprotectedPage()
    const { form, onChange } = useForm({ email: '', password: '' })
    const history = useHistory()

    const onClickLogin = (event) => {
        event.preventDefault()
        login(form, history)
    }

    return (
        <div>
            <p>LOGIN</p>
            <form onSubmit={onClickLogin}>
            <input
                name={'email'}
                placeholder={'digite o seu email'}
                type={'email'}
                required
                value={form.email}
                onChange={onChange}
            />
            <input
                name={'password'}
                placeholder={'digite a sua senha'}
                type={'password'}
                required
                value={form.password}
                onChange={onChange}
            />
            <button onClick={() => goToHomePage(history)}>Voltar</button>
            <button type={'submit'}>Login</button>
            </form>
        </div>
    )
}

export default LoginPage