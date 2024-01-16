"use client";
import React, { useState } from 'react';

const ENERGY_CLASSES = {
  solar: 'text-orange-500',
  wind: 'text-blue-500',
  hydro: 'text-cyan-500',
};

const ENERGY_SELECTED = {
  solar: 'bg-orange-500 text-white outline-none',
  wind: 'bg-blue-500 text-white outline-none',
  hydro: 'bg-cyan-500 text-white outline-none',
};

const nonSelectableStyles = {
  solar: 'bg-orange-500 text-white outline-none',
  wind: 'bg-blue-500 text-white outline-none',
  hydro: 'bg-cyan-500 text-white outline-none',
};


/**
 *  selectable : default = true
 *  source : wind , hydro , solar 
 */

export default function ProfitPill({  children }) {
 
  return (
    <div
      className={`rounded-full flex items-center justify-center px-4 max-w-sm w-full py-[2px] my-4 h-fit outline outline-gray-400 outline-1 bg-[#A2DE7E] text-[#24691E]  `}>
      
      <img src="/profit_pill_icon.png" alt="electric" height={60} width={60} className='bg-center bg-no-repeat bg-cover rotate-30' />
      
      {children}
    </div>
  );
}
