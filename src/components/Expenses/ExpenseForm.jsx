import { useState } from "react"
import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useGlobalContext } from "../../context/GlobalContext"
import './ExpenseForm.css'
import { bitcoin, plus } from "../../utils/icons"

const Forms = () => {
    const { addExpense } = useGlobalContext()
    const [InputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })

    const { title, amount, description, category, date } = InputState

    const handleinput = name => e => {
        setInputState({ ...InputState, [name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        addExpense(InputState)
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        })
    }


    return (
        <form onSubmit={handleSubmit} className="">
            <div className="input-control">
                <input type="text"
                    value={title}
                    name={'title'}
                    placeholder='Expense Title'
                    onChange={handleinput('title')
                    
                    }
                />
            </div>
            <div className="input-control">
                <input type="text"
                    value={amount}
                    name={'amount'}
                    placeholder='Expense Amount'
                    onChange={handleinput('amount')}
                />
            </div>
            <div className="input-control">
                <DatePicker
                    placeholderText="Enter a Date"
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => {
                        setInputState({ ...InputState, date: date })
                    }}
                    className="cursor-pointer p-[6%] border border-purple-700"
                />
            </div>
            <div className="selects input-control">
                <select required name={'category'} id="category" value={category} onChange={handleinput('category')}>
                    <option value="" disabled>Select Option</option>
                    <option value="education">Education</option>
                    <option value="groceries">Groceries</option>
                    <option value="health">Health</option>
                    <option value="subscriptions">Subscriptions</option>
                    <option value="clothing">Clothing</option>
                    <option value="travelling">Travelling</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="input-control">
                <textarea name={'description'} id="" value={description} placeholder="Add a refernce" cols="30" rows='4' onChange={handleinput('description')}></textarea>
            </div>
            <div className="submit-button">
                <button className="bg-purple-700 rounded-full p-[3%] text-white font-bold my-[3%] w-[60%] hover:bg-purple-600 active:bg-red-600">{plus} Add Expense</button>
            </div>

        </form>
    )
}

export default Forms