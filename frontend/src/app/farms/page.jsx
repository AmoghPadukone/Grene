import React from 'react'
import Heading from '@/components/Primitives/Heading'
import FarmCard from '@/components/Farms/FarmCard'
import FilterPill from '@/components/Farms/FilterPill'
import FarmExpandedCard from '@/components/Farms/FarmExpandedCard'

export default function page() {

 
  return (
    <section  className='px-4'>
    <div className='flex flex-col items-center justify-between w-full gap-2 my-2 sm:flex-row'>
        <Heading size="sm" className="font-black">Our Farms</Heading>

        <div className='flex items-center justify-center gap-4 p-4 flex-end'>
        <FilterPill source="solar" selectable={true}/>
        <FilterPill source="hydro" selectable={true} />
        <FilterPill source="wind"  selectable={true}/>
      </div>
    </div>

      
        <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3'>
            <FarmCard thumbnail="https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      thumbnail_description="An image of solar panel"
                      title="Guj919"
                      company="Tata Solar"
                      currency="$"
                      minInv={192}
            />


<FarmCard thumbnail="https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      thumbnail_description="An image of solar panel"
                      title="Guj919"
                      company="Tata Solar"
                      currency="$"
                      minInv={192}
            />


<FarmCard thumbnail="https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      thumbnail_description="An image of solar panel"
                      title="Guj919"
                      company="Tata Solar"
                      currency="$"
                      minInv={192}
            />


<FarmCard thumbnail="https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      thumbnail_description="An image of solar panel"
                      title="Guj919"
                      company="Tata Solar"
                      currency="$"
                      minInv={192}
            />
        </div>

     


        <FarmExpandedCard 
          title="Guj919"
          company="Tata Solar"
          currency="$"
          minInv={192}
          source="solar"
          profitPillDesc="$1.2 profit for every unit"
          projectDescription="This community solar project in Gujurat delivers clean power to Akshaykalpa Organic, the very first certified organic dairy farm in India. This is also our first zero-export solar project, by which the power generated is consumed locally; making it resilient to any grid outages and improving utilization of power."
        />
    
    </section>
  )
}
