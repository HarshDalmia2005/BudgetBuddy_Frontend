import React from 'react'
import Avatar from '../Avatar'
import { menuItems } from '../../utils/menuItems'
import { logo, logout, signout } from '../../utils/icons'
import './Navigation.css'
import { useAuth } from '../../context/AuthContext'

const Navigation = ({ active, setactive }) => {
  const { logout, userData } = useAuth()
  const fullName = userData.username
  const nameParts = fullName.split(/\s+/);

  const handlelogout = () => {
    const confirmation = confirm("Are you sure you want to sign out?")

    if (confirmation) logout()
  }
  return (
     <div className='flex md:justify-between md:w-[25%] sm:w-[95%] min-w-min  mx-auto flex-col md:h-full h-1/6 border border-purple-700 rounded-2xl p-[2%] backdrop-blur-3xl bg-white/95 '>
      <div className="header flex md:flex-col flex-row mb-0">
        <h2 className='text-2xl font-bold text-purple-700 text-start mb-1 flex items-center'>
          {logo} Budget Buddy
        </h2>
        <h2 className='text-xs text-purple-500 text-end font-sans'>
          Your Path to Smart Spending
        </h2>
      </div>
      <div className="user-container flex gap-1 items-center mb-0 md:my-5 justify-around">
        <Avatar />
        <div className="text mx-[10%] my-[5%] flex md:flex-col flex-row">
          <h2 className='md:text-2xl text-lg'>Welcome</h2>
          <h2 className='font-bold md:text-xl text-lg text-center text-purple-700  md:ml-0 ml-4'>{nameParts[0]}!</h2>
        </div>
      </div>
      <ul className="menu-items flex md:flex-col flex-row gap-2 md:gap-0 md:space-y-4 md:my-auto md:mx-0 mx-auto">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`cursor-pointer p-2 rounded-2xl md:text-sm text-xs hover:bg-purple-400 ${
              active === item.id ? 'bg-purple-700 text-white' : 'bg-white'
            }`}
            onClick={() => setactive(item.id)}
          >
            {item.icon}
            <span className='ml-2'>{item.title}</span>
          </li>
        ))}
      </ul>
      <div className="bottom-nav mt-2 md:mt-auto">
        <button
          onClick={handlelogout}
          className='cursor-pointer p-2 rounded-2xl hover:bg-purple-700 hover:text-white flex items-center md:text-sm text-xs'
        >
          {signout} Sign Out
        </button>
      </div>
    </div>
  )
}

export default Navigation