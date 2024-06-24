import React from 'react'
import { Bar, Doughnut, Pie ,Radar, PolarArea} from 'react-chartjs-2'
import { useGlobalContext } from '../../context/GlobalContext'
import { dateFormat } from '../../utils/dateFormat'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    RadialLinearScale,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    RadialLinearScale
);


const Transaction = () => {

    const { Income, Expenses } = useGlobalContext()

    const Bardata = {
        labels: Income.map((income) => {
            const { date } = income
            return dateFormat(date)
        }),
        datasets: [
            {
                label: 'Income',
                data: [
                    ...Income.map((income) => {
                        const { amount } = income
                        return amount;
                    })
                ],
                backgroundColor: [
                    'green',
                ],
            },
            {
                label: 'Expense',
                data: [
                    ...Expenses.map((expense) => {
                        const { amount } = expense
                        return amount;
                    })
                ],
                backgroundColor: 'red'
                ,
            }
        ]
    }


    const Piedata = {
        labels: Income.map((income) => {
            const { date } = income
            return dateFormat(date)
        }),
        datasets: [
            {
                label: 'Income',
                data: [
                    ...Income.map((income) => {
                        const { amount } = income
                        return amount;
                    })
                ],
                backgroundColor: [
                    'Red',
                    'Blue',
                    'Green',
                    'Yellow',
                    'Orange',
                    'Purple',
                    'Pink',
                    'Brown',
                    'Black',
                    'White',

                ],
            },
            {
                label: 'Expense',
                data: [
                    ...Expenses.map((expense) => {
                        const { amount } = expense
                        return amount;
                    })
                ],
                backgroundColor: [
                    'Red',
                    'Blue',
                    'Green',
                    'Yellow',
                    'Orange',
                    'Purple',
                    'Pink',
                    'Brown',
                    'Black',
                    'White',

                ],
            }
        ]
    }

    return (
        <div >
            <h2 className='text-3xl font-bold'>Transaction Stats</h2>
            <div className="flex md:flex-row flex-col">
                <div className="right md:w-1/2 h-full w-[100%] ">
                    <div className="bar-graph bg-white rounded-2xl h-1/2 my-5 p-2 border border-purple-700">
                        <Bar data={Bardata} />
                    </div>
                    <div className="pie-chart bg-white rounded-2xl h-1/2 my-5 p-2 border border-purple-700">
                        <PolarArea data={Piedata} />
                    </div>
                </div>
                <div className="left md:w-1/2 md:mx-4 w-[100%]">
                    <div className="doughnut-chart bg-white rounded-2xl h-1/2  my-5 p-2 border border-purple-700">
                        <Doughnut data={Piedata} />
                    </div>
                    <div className="doughnut-chart bg-white rounded-2xl h-1/2  my-5 p-2 flex items-center justify-center border border-purple-700">
                        <Radar data={Bardata} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transaction