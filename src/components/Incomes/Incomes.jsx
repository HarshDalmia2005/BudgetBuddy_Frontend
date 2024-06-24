import React from 'react'
import { useGlobalContext } from '../../context/GlobalContext'
import Forms from './Forms'
import IncomeItems from './incomeItems'
import { useEffect } from 'react'
import { dollar } from '../../utils/icons'

const Incomes = () => {

  const { addIncome, getIncome, Income, deleteIncome, totalIncome } = useGlobalContext()

  useEffect(() => {
    getIncome()
  }, [Income])


  return (
    <div>
      <h1 className='font-bold text-3xl'>Incomes</h1>
      <div className="total w-full h-[25%] bg-white py-5 text-3xl font-semibold flex justify-center items-center rounded-3xl my-2 border border-purple-700">
        Total Income:
        <p className='text-green-600 font-bold text-4xl'> {dollar} {totalIncome()}</p>
      </div>
      <div className="income-content w-full flex flex-col md:flex-row">
        <div className="form-container flex flex-col h-full md:w-[60%] w-full mb-4 md:mb-0">
          <Forms />
        </div>
        <div className="incomes w-full md:mx-3 mx-0">
          {Income.map((income) => {
            const { _id, title, amount, description, date, category, type } = income;
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
                deleteItem={deleteIncome}
              />
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Incomes