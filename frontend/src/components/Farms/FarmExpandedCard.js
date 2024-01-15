import React from 'react'
import FilterPill from './FilterPill'
import Heading from '../Primitives/Heading'
import OverviewCard from '@/components/Farms/OverviewCard'
import ProfitPill from '@/components/Farms/ProfitPill'


export default function FarmExpandedCard({source,projectDescription,title,company,currency,minInv,profitPillDesc}) {
    const data = [
        {icon:"Sun",title:"CAPACITY",quantity:"343 KW"},
        {icon:"Sun",title:"CAPACITY",quantity:"343 KW"},
        {icon:"Sun",title:"CAPACITY",quantity:"343 KW"},
    ]

    return (
    <div>
                <div className='flex flex-row justify-between gap-1'>
            <div>
                <p className='font-bold text-md'>{title}</p>
                <p className='text-[10px] font-light'>Installed by <span className='font-bold'>{company}</span> </p>
                <p className='text-[12px] font-light'>Min Investment <span className='font-bold'>{currency}{minInv}</span>/unit</p>
            </div>

            <div className='flex flex-col items-center'>
                <FilterPill source={source} />
            </div>
        </div>


        {/* carousel */}


        {/* About */}
        <Heading size="md">
            About the project
        </Heading>

        <p>
            {projectDescription}
        </p>

        {/* Profit Pill */}
        
        <ProfitPill>
            {profitPillDesc}
        </ProfitPill>


        {/* Overview */}
        <OverviewCard data={data} />

        {/* Reserve Source */}
        <button className='bg-[#101010] p-2 rounded-md text-white'>
            Reserve {source}
        </button>
    </div>
  )
}
