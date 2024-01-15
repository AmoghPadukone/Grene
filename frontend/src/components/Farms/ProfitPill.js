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
      className={`rounded-full px-8 max-w-[320px] py-2 w-fit h-fit outline outline-gray-400 outline-1 bg-[#A2DE7E] text-[#24691E]  `}>
      {children}
    </div>
  );
}
