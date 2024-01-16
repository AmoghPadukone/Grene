import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

import {
    Card,
    CardDescription,
    CardTitle,
} from "@/components/ui/card"

export default function FarmCard({ thumbnail, thumbnail_description, company, currency, minInv, title }) {
    return (
        <Card className="flex flex-col p-2">
            <div className='w-full '>
                <img src={thumbnail} alt={thumbnail_description} className='rounded-lg object-fit ' />
            </div>

            <div className='py-3 '>

                <CardTitle>
                    <span className='text-2xl'>{title}</span>
                    <p className='my-2 font-light'>Installed by <span className='font-bold'>{company}</span> </p>
                    <p className='font-light'>Min Investment <span className='font-bold'>{currency}{minInv}</span>/unit</p>
                </CardTitle>


                <CardDescription className='flex items-center gap-2 my-2'>
                    <p className='text-[12px]'>View Details</p>
                    <span><FaArrowRight /></span>
                </CardDescription>
            </div>
        </Card>
    )
}
