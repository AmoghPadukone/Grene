import React from 'react'



export default function PrimitiveCard({children,className,radius}) {
  return (
    <div className={`${className} rounded-${radius} border-[0.2px] border-black shadow-sm`}>
      {children}
    </div>
  )
}
