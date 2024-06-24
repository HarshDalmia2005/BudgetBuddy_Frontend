import React from 'react'
import Chart from '../Chart/Chart'
import { dollar } from '../../utils/icons'
import { useGlobalContext } from '../../context/GlobalContext'
import { useEffect } from 'react'
import History from './History'

const Dashboard = () => {

  const { totalIncome, totalExpense, getIncome, getExpense, Income, Expenses } = useGlobalContext()

  useEffect(() => {
    getIncome()
    getExpense()
  }, [totalIncome(), totalExpense()])


  return (
    <div>
      <h1 className='font-bold text-3xl'>All Transactions</h1>
      <div className="stats">
        <div className="full-container w-full h-full flex md:flex-row flex-col">
          <div className="left-container md:w-[60%] h-[50%] w-full">
            <Chart />
            <div className="amount-container my-2 flex flex-col">
              <div className="first flex space-x-5">
                <div className="income bg-white p-4 w-1/2 rounded-2xl border border-purple-700">
                  <h2 className='font-bold md:text-base text-xs'>Total Income:</h2>
                  <p className='font-bold md:text-4xl text-2xl'>{dollar} {totalIncome()} </p>
                </div>

                <div className="expenses bg-white w-1/2 rounded-2xl p-4 border border-purple-700">
                  <h2 className='font-bold md:text-base text-xs'>Total Expense:</h2>
                  <p className='font-bold md:text-4xl text-2xl'>{dollar} {totalExpense()}</p>
                </div>
              </div>

              <div className="balance bg-white w-1/2 rounded-2xl py-4 my-4 mx-[20%] text-center border border-purple-700">
                <h2 className='font-bold md:text-base text-xs'>Total Balance:</h2>
                <p className='font-bold md:text-4xl text-2xl text-green-600'>{dollar} {totalIncome() - totalExpense()}</p>
              </div>
            </div>
          </div>

          <div className="right-container md:w-[40%] w-[95%] md:mx-5 mx-auto">
            <History />
            <div className="salaryRange my-10 ">
              <div className="heading flex justify-between border">
                <h2>MIN</h2>
                <h2 className='font-bold text-xl'>Income</h2>
                <h2>MAX</h2>
              </div>
              <div className="amount flex justify-between bg-white p-3 rounded-xl md:text-xl text-lg border border-purple-700">
                <p>
                {dollar} {Math.min(...Income.map((income) => {
                    return income.amount
                  }))}
                </p>
                <p>
                {dollar} {Math.max(...Income.map((income) => {
                    return income.amount
                  }))}
                </p>
              </div>

            </div>

            <div className="ExpenseRange my-10">
              <div className="heading flex justify-between">
                <h2>MIN</h2>
                <h2 className='font-bold text-xl'>Expense</h2>
                <h2>MAX</h2>
              </div>
              <div className="amount flex justify-between bg-white p-3 rounded-xl text-xl border border-purple-700">
                <p>
                {dollar} {Math.min(...Expenses.map((expense) => {
                    return expense.amount
                  }))}
                </p>
                <p>
                {dollar} {Math.max(...Expenses.map((expense) => {
                    return expense.amount
                  }))}
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard