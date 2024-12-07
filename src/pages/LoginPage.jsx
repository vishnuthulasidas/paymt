import React from 'react'
import { GrSecure } from "react-icons/gr";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate()
  return (
    <div className='bg-black h-screen flex items-center justify-center font-parkinsan'>
    <div className='flex flex-col gap-5 px-8 py-10 bg-gray-200 h-fit w-[30%] max-w-[400px] rounded'>
      <div className='text-3xl font-semibold'>Login</div>
      <div className='flex flex-col gap-2'>
      <input className='px-2 py-1 rounded outline-none focus:outline-indigo-500' type="text" name="" id="" placeholder='vishnu@me.com' /> 
      <input className='px-2 py-1 rounded outline-none focus:outline-indigo-500' type="password" placeholder='**********'/> 
      </div>
      <button className='bg-indigo-600 text-white text-lg font-medium p-2 flex items-center justify-center gap-2 hover:bg-black transition-all ease-linear'
      onClick={()=>navigate("/home")}
      ><GrSecure/>Sign In</button>
      <Link to="" className='underline underline-offset-4'>Forgot password</Link>
      <Link to="/register">Dont have an Account? <span className='underline underline-offset-4'>Click here</span></Link>
    </div> 
   </div>
  )
}

export default Login
