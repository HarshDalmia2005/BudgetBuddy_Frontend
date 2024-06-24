import React from 'react'
import { useGlobalContext } from '../../context/GlobalContext'
import { dollar } from '../../utils/icons'

const History = () => {

    const {transactionHistory} =useGlobalContext()

    const [...history]=transactionHistory()
  return (
    <div>
        <h2 className='font-bold text-2xl'>Recent History</h2>
        <div className="history ">
            {history.map((item)=>{
                const {_id,title,amount,type}= item
                return (
                    <div key={_id} className='historyItem bg-white rounded-2xl flex justify-between p-4 my-4 border border-purple-700'>
                        <p style={{color: type==='income' ? 'green': 'red'}}>
                            {title}
                        </p>
                        <p style={{color: type==='income' ? 'green': 'red'}}>
                           {
                             type==='expense'? `-`:`+`
                           }
                           {dollar} {amount}
                        </p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default History