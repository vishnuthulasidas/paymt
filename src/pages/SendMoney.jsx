import React from 'react'
import Wallet from '../components/Wallet'
import PersonCard from '../components/PersonCard'

const SendMoney = () => {
  return (
    <div>
      <Wallet />
      <div className='font-bold text-2xl mt-5'>
        <div className="font-bold text-xl mb-4">Favorites</div>
        <div className='flex gap-4'>
          <PersonCard name="Vishnu" />
          <PersonCard name="Anu" />
          <PersonCard name="Anju" />
        </div>
        <div className='mt-4'>
          <div className="font-bold text-xl mb-4">Search</div>
          <div className='flex items-center gap-5'><input type="text" className='rounded text-[15px] px-3'/> <button className='bg-blue-500 text-[15px] px-10 text-white rounded'>Search</button></div>
        </div>


      </div>
    </div>
  )
}

export default SendMoney
