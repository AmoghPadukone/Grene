import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

export default function FarmCard({thumbnail,thumbnail_description,company,currency,minInv,title}) {
  return (
    <div className='flex justify-between max-w-sm gap-3 px-2 py-2 mx-3 border-2 rounded-md '>
        <div className='w-full max-w-[50%] h-full '>
            <img src={thumbnail} alt={thumbnail_description} className='rounded-lg object-fit ' />
        </div>

        <div className='flex flex-col justify-between gap-1'>
            <div>
                <p className='font-bold text-md'>{title}</p>
                <p className='text-[10px] font-light'>Installed by <span className='font-bold'>{company}</span> </p>
                <p className='text-[12px] font-light'>Min Investment <span className='font-bold'>{currency}{minInv}</span>/unit</p>
            </div>

            <span className='flex items-center gap-2'>
                <p className='text-[12px]'>View Details</p>
                <span><FaArrowRight /></span>
            </span>
        </div>
    </div>
  )
}
