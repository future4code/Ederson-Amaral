import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"


const useProtectedPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem('token')
        
        if(token === null) {
            history.push('/login')
        }
    }, [history])

    return (
        <div>Acesso permitido somente para usuários logados</div>
    )
   
}

export default useProtectedPage