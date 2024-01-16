import React from 'react'
import ReserveGrid from '@/components/Reserve/ReserveGrid'
import Heading from '@/components/Primitives/Heading'

export default function page() {
  const projectName = "Guj919"
  const company = "Tata solars"
  return (
    <section className='px-2'>
      <div>
      <Heading size="lg">{projectName}</Heading>
      <Heading size="sm"><span className='font-light'>Installed by</span> {company}</Heading>
      </div>
        <ReserveGrid />

        <div>
        <button className='bg-[#101010] my-2 w-full mx-auto p-2 rounded-md text-white min-w-sm'>
            Pay with UPI
        </button>
        </div>
    </section>
  )
}
