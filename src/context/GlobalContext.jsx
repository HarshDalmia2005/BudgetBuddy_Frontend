import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const BASE_URL = 'https://budgetbuddy-7vsh.onrender.com/transactions/'

const GlobalContext = createContext()

export const GlobalProvider = (({ children }) => {

    const [Income, setIncome] = useState([])
    const [Expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}add-income`, income)
            .catch((err) => {
                setError(err.response.data.message)
                console.log(err.response.data.message)
            })
    }

    const getIncome = async () => {
        const response = await axios.get(`${BASE_URL}get-income`)
        setIncome(response.data)
    }

    const deleteIncome = async (id) => {
        const response = await axios.delete(`${BASE_URL}delete-income/${id}`)
    }

    const totalIncome = () => {
        let total = 0;
        Income.forEach((income) => {
            total = total + income.amount
        })
        return total;
    }



    const addExpense = async (expense) => {
        const response = await axios.post(`${BASE_URL}add-expense`, expense)
            .catch((err) => {
                setError(err.response.data.message)
                console.log(err.response.data.message)
            })
    }

    const getExpense = async () => {
        const response = await axios.get(`${BASE_URL}get-expense`)
        setExpenses(response.data)
    }

    const deleteExpense = async (id) => {
        const response = await axios.delete(`${BASE_URL}delete-expense/${id}`)
    }

    const totalExpense = () => {
        let total = 0;
        Expenses.forEach((expense) => {
            total = total + expense.amount
        })
        return total;
    }


    const transactionHistory = () => {
        const history = [...Income, ...Expenses]
        history.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt)
        })
        return history.slice(0,4)
      }


    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncome,
            Income,
            deleteIncome,
            totalIncome,
            addExpense,
            deleteExpense,
            getExpense,
            Expenses,
            totalExpense,
            transactionHistory,
            error
        }}>
            {children}
        </GlobalContext.Provider>
    )
})

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}


