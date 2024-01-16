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

export default function FilterPill({  source, selectable }) {
  const [selected, setSelected] = useState({
    solar: false,
    hydro: false,
    wind: false,
  });

  const handleClick = () => {
    if (selectable) {
      setSelected((prevSelected) => ({
        ...prevSelected,
        [source]: !prevSelected[source],
      }));
    }
  };

  const dynamicStyles = selected[source] ? ENERGY_SELECTED[source] : '';

  const containerStyles = selectable
    ? `${ENERGY_CLASSES[source]} ${dynamicStyles}`
    : nonSelectableStyles[source];

  return (
    <div
      className={`rounded-full px-2 py-1  max-w-[100px]  w-full flex items-center justify-center outline outline-gray-400 outline-1  ${containerStyles}`}
      onClick={handleClick}
    >
      {source}
    </div>
  );
}
