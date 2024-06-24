import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import React from 'react'
import { useState } from "react";
import { redirect, Route } from "react-router-dom";

const useLogin = () => {
    const { login,userData } = useAuth()
    const [error, setError] = useState(null)

    const loginUser = async (values) => {

        try {
            setError(null)

            const res = await axios.post("https://budgetbuddy-7vsh.onrender.com/Login", values)
            console.log(res)
            if (res.status === 200) {
                login(res.data.token, res.data.user)
                console.log(res.data.message)
                console.log(res.data.user)
            }


        } catch (err) {

            if (axios.isAxiosError(err)) {
                setError(err.response.data.message)
                console.log(err.response.data.message)
            }
            else console.log(err)
        }
    }

    return { error, loginUser}

}

export default useLogin