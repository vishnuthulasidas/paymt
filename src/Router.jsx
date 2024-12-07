import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Home from './pages/Home'
import SendMoney from './pages/SendMoney'
import History from './pages/History'
import Profile from './pages/Profile'


const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/home' element={<Home/>}>
              <Route path='' element={<SendMoney/>}/>
              <Route path='send-money' element={<SendMoney/>}/>
              <Route path='history' element={<History/>}/>
              <Route path='profile' element={<Profile/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
