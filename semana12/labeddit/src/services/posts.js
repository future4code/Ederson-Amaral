import axios from "axios"
import { BASE_URL } from '../constants/urls'

export const createPost = (body, clear, setIsLoading) => {
  setIsLoading(true)
    axios.post(`${BASE_URL}/posts`, body, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then((response) => {
        alert(response.data.message)
        clear()
        setIsLoading(false)
      })
      .catch((error) => {
        alert(error.response.message)
        setIsLoading(false)
      })
  }