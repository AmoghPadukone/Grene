"use client";
import React, { useState } from 'react';

export default function ReserveGrid() {
  const price = 20;
  const [buy, setBuy] = useState(Array(25).fill(false));
  const [sum, setSum] = useState(0);

  const handleDivClick = (index) => {
    const updatedBuy = [...buy];
    updatedBuy[index] = !updatedBuy[index];
    setBuy(updatedBuy);

    if (updatedBuy[index]) {
      setSum((prev) => prev + price);
    } else {
      setSum((prev) => prev - price);
    }
  };

  return (
    <div className='p-3'>
    <div className='grid max-w-md grid-cols-5 grid-rows-5 gap-3 '>

      {Array.from({ length: 25 }, (_, index) => (
        <div
          key={index}
          onClick={() => handleDivClick(index)}
          className={`rounded-md p-4 w-full h-full flex items-center justify-center text-bold ${
            buy[index] ? 'bg-[#94FF0D]' : 'bg-black'
          }`}
        >
          {index+1}
        </div>
      ))}

    </div>
      <span className='w-full text-3xl font-bold'>Total : ${sum}</span>
      </div>
  );
}
