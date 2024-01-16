"use client";
import React, { useState } from 'react';
import FilterPill from './FilterPill';
import Heading from '../Primitives/Heading';
import OverviewCard from '@/components/Farms/OverviewCard';
import ProfitPill from '@/components/Farms/ProfitPill';
import { MdSunny } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { FaPercentage } from "react-icons/fa";

import ReserveGrid from '../Reserve/ReserveGrid';

import {
  Card,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import BuyCard from '../Buy/BuyCard';

export default function FarmExpandedCard({ source, projectDescription, title, company, currency, minInv, profitPillDesc }) {

  const [open, setOpen] = React.useState(false);

  const data = [
    { icon: <MdSunny color='white' size={28} />, title: "CAPACITY", quantity: "343 KW" },
    { icon: <BsGraphUp color='white' size={28} />, title: "CAPACITY", quantity: "343 KW" },
    { icon: <FaPercentage color='white' size={28} />, title: "CAPACITY", quantity: "343 KW" },
  ];

  return (
    <Card className="gap-4 p-4">
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
        {/* <div className="block md:hidden">
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
            </DrawerTrigger>
            <DrawerContent>
              <BuyCard />
            </DrawerContent>
          </Drawer>
        </div> */}

        <Button className="w-full p-2 my-4">  Reserve {source}</Button>

    
    </Card>
  );
}
