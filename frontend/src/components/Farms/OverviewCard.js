import React from 'react'
import PrimitiveCard from '../Primitives/PrimitiveCard'

function StatsHolder({icon,title,quantity}){
    return(
        <div className='flex gap-3'>
            <div className='bg-[#32C8DD] rounded-sm p-2'>
                {icon}
            </div>

            <div className='flex flex-col'>
                <span className='text-[#7B7B7B] text-[16px]'>{title}</span>
                <span className='text-[24px] font-semibold'>{quantity}</span>
            </div>
        </div>
    )
}


export default function OverviewCard({data}) {
  return (
    <PrimitiveCard radius="md">
        {
            data.map((data)=>{
                return(
                    <StatsHolder icon={data.icon} title={data.title} quantity={data.quantity} />
                )
            })
        }
    </PrimitiveCard>

  )
}
