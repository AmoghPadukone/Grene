import React from 'react'
import Heading from '@/components/Primitives/Heading'
import FarmCard from '@/components/Farms/FarmCard'
import FilterPill from '@/components/Farms/FilterPill'
import FarmExpandedCard from '@/components/Farms/FarmExpandedCard'

export default function page() {

 
  return (
    <>
        <Heading size="sm" className="font-black">Our Farms</Heading>

        <div className='grid-cols-1'>
            <FarmCard thumbnail="https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      thumbnail_description="An image of solar panel"
                      title="Guj919"
                      company="Tata Solar"
                      currency="$"
                      minInv={192}
            />
        </div>

        <FilterPill source="solar" selectable={true}/>
        <FilterPill source="hydro" />
        <FilterPill source="wind" />

        <FarmExpandedCard 
          title="Guj919"
          company="Tata Solar"
          currency="$"
          minInv={192}
          source="solar"
          profitPillDesc="$1.2 profit for every unit"
        />
    
    </>
  )
}
