import React from 'react'


const Wallet = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg flex flex-col w-[30%] py-6 px-5 text-white font-poppins">
                <div className="font-bold text-xl mb-2">Primary</div>
                <div className="font-sans text-4xl tracking-wide mb-4">&#8377;10,000</div>
                <div className="text-sm opacity-80">Available Balance</div>
            </div>
        </div>

    )
}

export default Wallet
