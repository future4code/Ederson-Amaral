import axios from 'axios'
import { BASE_URL } from '../constants/url'
import { goToFeed } from '../routes/coordinator'

export const login = (body, clear, history, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/users/login`, body)
        .then((response) => {
            localStorage.setItem('token', response.data.token)
            clear()
            setIsLoading(false)
            goToFeed(history)
            setRightButtonText('Logout')
        })
        .catch((error) => {
            setIsLoading(false)
            alert(error.response.data.message)
        })
}

export const signUp = (body, clear, history, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/users/signup`, body)
        .then((response) => {
            localStorage.setItem('token', response.data.token)
            clear()
            setIsLoading(false)
            goToFeed(history)
            setRightButtonText('Logout')
        })
        .catch((error) => {
            setIsLoading(false)
            alert(error.response.data.message)
        })
}