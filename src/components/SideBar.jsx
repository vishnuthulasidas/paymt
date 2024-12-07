import React from 'react'
import { SiDeutschebank } from "react-icons/si";
import { useNavigate } from 'react-router-dom';


const SideBar = () => {
  const navigate = useNavigate()
  return (
    <div className='w-[20%] shadow-lg bg-white h-full p-8 font-poppins flex flex-col justify-start'>
      <div className='flex gap-2 items-center text-center text-2xl font-semibold border-b border-gray-200 pb-4 text-indigo-500'><SiDeutschebank />Hello Vishnu</div>
      <div className='mt-10 flex flex-col gap-3 flex-grow'>
        <div className='flex gap-2 py-3 px-5 rounded bg-indigo-100 text-md font-medium cursor-pointer'
          onClick={() => navigate("send-money")}
        ><span className='w-5 h-5 bg-red-600 rounded-xl'></span>Send Money</div>

        <div className='flex gap-2 py-3 px-5 rounded bg-indigo-100 text-md font-medium cursor-pointer'
          onClick={() => navigate("history")}
        ><span className='w-5 h-5 bg-yellow-500 rounded-xl'></span>History</div>

        <div className='flex gap-2 py-3 px-5 rounded bg-indigo-100 text-md font-medium cursor-pointer'
          onClick={() => navigate("profile")}
        ><span className='w-5 h-5 bg-green-500 rounded-xl'
        ></span>Profile</div>
      </div>

      <div className='text-center py-3 px-5 rounded bg-red-500 text-white text-md font-medium cursor-pointer'
        onClick={() => navigate("/login")}
      >Logout</div>

    </div>
  )
}

export default SideBar
