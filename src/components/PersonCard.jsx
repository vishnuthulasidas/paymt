import React from 'react'
import { MdPerson } from "react-icons/md";

const PersonCard = ({name}) => {
    return (
        <div className="flex flex-col items-center bg-white p-4 px-10 rounded-xl shadow-lg w-fit">
            <div className="bg-blue-500 text-white w-20 h-20 rounded-full flex items-center justify-center mb-3">
                <MdPerson className="text-4xl" />
            </div>
            <div className="font-semibold text-lg text-center">{name}</div>
        </div>
    )
}

export default PersonCard
