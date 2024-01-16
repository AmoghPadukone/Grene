import React from 'react'
import FilterPill from './FilterPill'
import Heading from '../Primitives/Heading'
import OverviewCard from '@/components/Farms/OverviewCard'
import ProfitPill from '@/components/Farms/ProfitPill'
import PrimitiveCard from '../Primitives/PrimitiveCard'
import { MdSunny } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { FaPercentage } from "react-icons/fa";

export default function FarmExpandedCard({source,projectDescription,title,company,currency,minInv,profitPillDesc}) {
    const data = [
        {icon:<MdSunny color='white' size={28}/>,title:"CAPACITY",quantity:"343 KW"},
        {icon:<BsGraphUp color='white' size={28}/>,title:"CAPACITY",quantity:"343 KW"},
        {icon:<FaPercentage color='white' size={28}/>,title:"CAPACITY",quantity:"343 KW"},

    ]

    return (
    <PrimitiveCard radius="lg" className="gap-4 p-4">
                <div className='flex flex-row items-center justify-between gap-3 my-2'>
            <div>
                <Heading size="lg" className="m-0">{title}</Heading>
            </div>

            <div className='flex flex-col items-center'>
                <FilterPill source={source} />
            </div>
        </div>

            <div className='my-2'>
            <Heading size="sm" className='text-[10px] leading-tight font-light'>Installed by <span className='font-bold'>{company}</span> </Heading>
                <Heading size="sm" className='max-md:text-[16px] font-light'>Min Investment <span className='font-bold'>{currency}{minInv}</span>/unit</Heading>
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
        <button className='bg-[#101010] my-2 w-full mx-auto p-2 rounded-md text-white min-w-sm'>
            Reserve {source}
        </button>
    </PrimitiveCard>
  )
}
