import React from 'react'

export default function FarmCard({thumbnail,thumbnail_description,company,currency,minInv,title}) {
  return (
    <div className='flex justify-between max-w-sm gap-3 px-2 py-2 mx-3 border-2 rounded-md '>
        <div className='h-full my-auto '>
            <img src={thumbnail} alt={thumbnail_description} className='max-h-[100px] md:max-h[150px] object-cover rounded-lg' />
        </div>

        <div className='flex flex-col justify-between gap-1'>
            <div>
                <p className='font-bold text-md'>{title}</p>
                <p className='text-[10px] font-light'>Installed by <span className='font-bold'>{company}</span> </p>
                <p className='text-[12px] font-light'>Min Investment <span className='font-bold'>{currency}{minInv}</span>/unit</p>
            </div>

            <span className='flex gap-x-4'>
                <p>View Details</p>
                <p>=</p>
            </span>
        </div>
    </div>
  )
}
