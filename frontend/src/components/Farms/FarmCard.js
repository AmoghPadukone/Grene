import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export default function FarmCard({ item, setIsModalOpen }) {
  const { image, company, currency, minInv, title } = item;

  return (
    <Card className="flex flex-col w-[80%] p-2  my-5">
      <div className='w-full '>
        <img src={image} className='object-cover rounded-lg ' />
      </div>

      <div className='py-3 '>
        <CardTitle>
          <span className='text-2xl'>{title}</span>
          <p className='my-2 font-light'>Installed by <span className='font-bold'>{company}</span> </p>
          <p className='font-light'>Min Investment <span className='font-bold'>{currency}{minInv}</span>/unit</p>
        </CardTitle>

        <CardDescription className='flex my-2'>
          <button className='flex items-center gap-2' onClick={() => setIsModalOpen(true)}>
            <p className='text-[12px]'>View Details</p>
            <span><FaArrowRight /></span>
          </button>
        </CardDescription>
      </div>
    </Card>
  );
}
