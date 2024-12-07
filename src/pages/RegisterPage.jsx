import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserShield } from "react-icons/fa";

const RegisterPage = () => {
    return (
        <div className='bg-black h-screen flex items-center justify-center font-parkinsan'>
        <div className='flex flex-col gap-5 px-8 py-10 bg-gray-200 h-fit w-[30%] max-w-[400px] rounded'>
          <div className='text-3xl font-semibold'>Register</div>
          <div className='flex flex-col gap-2'>
          <input className='px-2 py-1 rounded outline-none focus:outline-indigo-500' type="text" name="" id="" placeholder='name' /> 
          <input className='px-2 py-1 rounded outline-none focus:outline-indigo-500' type="email" name="" id="" placeholder='email' /> 
          <input className='px-2 py-1 rounded outline-none focus:outline-indigo-500' type="text" name="" id="" placeholder='phone' /> 
          <input className='px-2 py-1 rounded outline-none focus:outline-indigo-500' type="password" placeholder='password'/> 
          <input className='px-2 py-1 rounded outline-none focus:outline-indigo-500' type="password" placeholder='confirm password'/> 
          </div>
          <button className='bg-indigo-600 text-white text-lg font-medium p-2 flex items-center justify-center gap-2 hover:bg-black transition-all ease-linear'><FaUserShield/>Sign Up</button>
          <Link to="/login">Already have an Account? <span className='underline underline-offset-4'>Click here</span></Link>
        </div> 
       </div>
    )
}

export default RegisterPage
