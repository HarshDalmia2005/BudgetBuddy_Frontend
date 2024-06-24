import React from 'react'
import { bitcoin, book, calendar, card, circle, clothing, comment, dollar, food, freelance, medical, money, piggy, stocks, trash, tv, users, yt } from '../../utils/icons'
import { dateFormat } from '../../utils/dateFormat'
const IncomeItems = ({ id, title, amount, description, date, category, type, deleteItem }) => {



    const categoryIcon = () => {
        switch (category) {
            case 'salary':
                return money;
            case 'freelancing':
                return freelance;
            case 'investments':
                return stocks;
            case 'bitcoin':
                return bitcoin;
            case 'stocks':
                return users;
            case 'bank':
                return card;
            case 'youtube':
                return yt;
            case 'other':
                return piggy;
            default:
                return ''

        }
    }


    const expenseIcon = () => {
        switch (category) {
            case 'education':
                return book;
            case 'groceries':
                return food;
            case 'health':
                return medical;
            case 'subscriptions':
                return tv;
            case 'clothing':
                return clothing;
            case 'travelling':
                return freelance;
            case 'other':
                return circle;
            default:
                return '';
        }
    }

    return (
        <div className='bg-white rounded-3xl my-3 flex flex-col md:flex-row md:pt-0 pt-2 border border-purple-700'>
            <div className="firsticon flex items-center px-5 text-4xl object-cover w-[10%] md:w-auto">
                {type === "income" ? categoryIcon() : expenseIcon()}
            </div>
            <div className="content min-w-full md:min-w-0">
                <div className='flex items-center'>
                    <h5 className='px-3 py-2 text-xl font-medium'>{title}</h5>
                </div>
                <div className="inner-content flex flex-col md:flex-row justify-between min-w-full px-3 py-1">
                    <div className="text flex flex-col md:flex-row md:space-x-5 text-sm">
                        <div className='flex items-center'>
                            <div className="icon px-1 ">{dollar}</div>
                            <div>{amount}</div>
                        </div>
                        <div className='flex items-center'>
                            <div className="icon px-2 ">{calendar}</div>
                            <div>{dateFormat(date)}</div>
                        </div>
                        <div className='flex items-center'>
                            <div className="icon px-2">{comment}</div>
                            <div>{description}</div>
                        </div>
                    </div>
                    <button onClick={() => deleteItem(id)} className="bg-red-600 rounded-full py-2 text-white font-bold w-20 h-full text-sm mx-5 my-2 hover:bg-red-500 active:bg-red-600 self-end md:self-auto">{trash}</button>
                </div>
            </div>
        </div>

    )
}

export default IncomeItems