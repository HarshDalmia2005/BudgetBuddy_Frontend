import React from 'react'
import MainPage from './MainPage'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import { useAuth } from './context/AuthContext'

const App = () => {
  const {isAuthenticated}=useAuth()
  return (
    <Router>
      <Routes>
        <Route path='/' element={!isAuthenticated?<Register />:<Navigate to='/Main'/>} ></Route>
        <Route path='/Login' element={!isAuthenticated?<Login />:<Navigate to='/Main'/>} ></Route>
        <Route path='/Main' element={isAuthenticated?<MainPage/>:<Register/>} ></Route>
      </Routes>
    </Router>

  )
}

export default App