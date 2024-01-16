import React from 'react'

import {
    Card,
    CardDescription,
    CardTitle,
} from "@/components/ui/card"

function StatsHolder({icon,title,quantity}){
    return(
        <Card className='flex gap-3 p-2 m-4'>
            <div className='bg-[#32C8DD] flex justify-center items-center rounded-md p-4'>
                {icon}
            </div>

            <div className='flex flex-col'>
                <span className='text-[#7B7B7B] text-[16px]'>{title}</span>
                <span className='text-[24px] font-semibold'>{quantity}</span>
            </div>
        </Card>
    )
}


export default function OverviewCard({data}) {
  return (
    <Card className="p-2">
        {
            data.map((data,index)=>{
                return(
                    <StatsHolder icon={data.icon} title={data.title} quantity={data.quantity} index={index} />
                )
            })
        }
    </Card>

  )
}
