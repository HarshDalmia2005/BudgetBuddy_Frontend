import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js'

import {Line} from 'react-chartjs-2'
import { useGlobalContext } from '../../context/GlobalContext'
import { dateFormat } from '../../utils/dateFormat'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
)

const Chart = () => {

   const {Income, Expenses}= useGlobalContext()
    
    const data={
        labels:Income.map((income)=>{
            const {date}=income
            return dateFormat(date)
        }),
        datasets:[
            {
                label: 'Income',
                data:[
                    ...Income.map((income)=>{
                        const {amount}=income
                        return amount;
                    })
                ],
                backgroundColor: 'green',
                tension:0.2
            },
            {
                label: 'Expense',
                data:[
                    ...Expenses.map((expense)=>{
                        const {amount}=expense
                        return amount;
                    })
                ],
                backgroundColor: 'red',
                tension:0.2
            }
        ]
    }


    return (
        <div className='bg-white rounded-3xl w-full p-4 my-4 border border-purple-700'>
            <Line data={data}/>
        </div>
    )
}

export default Chart