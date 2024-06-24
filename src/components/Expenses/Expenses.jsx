import React from 'react'
import { useGlobalContext } from '../../context/GlobalContext'
import ExpenseForm from './ExpenseForm'
import IncomeItems from '../Incomes/incomeItems'
import { useEffect } from 'react'
import { dollar } from '../../utils/icons'

const Expenses = () => {

  const { addExpense, getExpense, Expenses, deleteExpense, totalExpense } = useGlobalContext()

  useEffect(() => {
    getExpense()
  }, [Expenses])


  return (
    <div>
      <h1 className='font-bold text-3xl'>Expenses</h1>
      <div className="total w-full h-[25%] bg-white py-5 text-3xl font-semibold flex justify-center items-center rounded-3xl my-2 border border-purple-700">
        Total Expense:
        <p className='text-red-600 font-bold text-4xl'> {dollar} {totalExpense()}</p>
      </div>
      <div className="expense-content w-full flex flex-col md:flex-row">
        <div className="form-container flex flex-col h-full md:w-[60%] w-full mb-4 md:mb-0">
          <ExpenseForm />
        </div>
        <div className="expenses w-full md:mx-3 mx-0">
          {Expenses.map((expense) => {
            const { _id, title, amount, description, date, category, type } = expense;
            return (
              <IncomeItems
                key={_id}
                id={_id}
                title={title}
                description={description}
                amount={amount}
                category={category}
                date={date}
                type={type}
                deleteItem={deleteExpense}
              />
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Expenses