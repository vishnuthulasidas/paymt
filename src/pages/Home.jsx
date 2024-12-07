import React from 'react'
import SideBar from '../components/sidebar'
import { Outlet } from 'react-router-dom'
const Home = () => {
  return (
    <div className='h-screen bg-gray-300 flex items-start'>
        <SideBar/>
      <div className='flex-grow p-10'>
      <Outlet/>
    </div>
    </div>
  )
}

export default Home
