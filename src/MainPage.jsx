import { useState, useEffect } from 'react'
import './index.css'
import Navigation from './components/Navigation/Navigation'
import Dashboard from './components/Dashboard/Dashboard'
import Incomes from './components/Incomes/Incomes'
import Expenses from './components/Expenses/Expenses'
import { useGlobalContext } from './context/GlobalContext'
import Transaction from './components/Transaction_chart/Transaction'


function MainPage() {
  const [active, setactive] = useState(1)
  


  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />

      case 2:
        return <Transaction />

      case 3:
        return <Incomes />

      case 4:
        return <Expenses />

      default:
        return <Dashboard />
    }
  }



  return (
    <div className='bg-cover bg-center md:h-screen h-full min-w-max min-h-min font-sans' style={{ backgroundImage: "url('./bg3.avif')" }}>
      <div className="flex md:flex-row flex-col h-full w-full p-[1%]">
          <Navigation active={active} setactive={setactive} />
          <main className=' h-full md:w-[80%] w-[95%] border border-purple-700 rounded-2xl p-[2%] backdrop-blur-3xl bg-white/90 mx-[2%] lg:overflow-auto lg:overflow-x-hidden md:mt-0 mt-5'>
            {displayData()}
          </main>
      </div>
    </div>
  )
}

export default MainPage
