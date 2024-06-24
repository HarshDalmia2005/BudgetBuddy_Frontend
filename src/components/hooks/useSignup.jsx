import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import React from 'react'
import { useState } from "react";

const useSignup = () => {
    const { login } = useAuth()
    const [error, setError] = useState(null)

    const registerUser = async (values) => {

        try {
            setError(null)

            const res = await axios.post("https://budgetbuddy-7vsh.onrender.com/Register", values)

            if (res.status === 200) {
                login(res.data.token, res.data.user)
                console.log(res.data.message)
            }
        } catch (err) {
            if (axios.isAxiosError(err)) {
                setError(err.response.data.message)
                console.log(err.response.data.message)
            }
            else console.log(err)
        }
    }

    return { error, registerUser }

}

export default useSignup