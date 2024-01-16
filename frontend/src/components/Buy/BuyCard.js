import React from 'react'

import Heading from '../Primitives/Heading'
import ReserveGrid from '../Reserve/ReserveGrid'
import { Button } from '../ui/button'
export default function BuyCard() {
    const projectName = "Guj919"
    const company = "Tata solars"
    const source = "Solar"
  return (
    <div className='flex flex-col items-center p-3'>
    <div>
    <Heading size="lg">{projectName}</Heading>
    <Heading size="sm"><span className='font-light'>Installed by</span> {company}</Heading>
    </div>

      <ReserveGrid />

      <div className='w-full max-w-md '>
      <Button className="w-full p-2 my-4">  Reserve {source}</Button>

      </div>
      </div>
  )
}