import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/urls";
import axios from "axios";

const useRequestData = (endpoint, initialState) => {
    const [data, setData] = useState(initialState)

    const getData = () => {
        axios.get(`${BASE_URL}${endpoint}`,{
            headers: {
                auth: localStorage.getItem('token')
            }
        })
        .then((response) => setData(response.data))
        .catch((error) => alert(error.response.data.message))
    }

    useEffect(() => {
        getData()
    }, [endpoint])

    return [data, getData]
}

export default useRequestData