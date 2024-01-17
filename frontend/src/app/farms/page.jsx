"use client";
import React, { useState } from "react";
import Heading from "@/components/Primitives/Heading";
import FarmCard from "@/components/Farms/FarmCard";
import FilterPill from "@/components/Farms/FilterPill";
import FarmExpandedCard from "@/components/Farms/FarmExpandedCard";
import { dummyData } from "@/utils/dummyData";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


const buttonStyles = {
  base: "bg-transparent border-2 border-gray-300 rounded-full shadow-transparent hover:text-white focus:text-white",
  green: "text-green-500 hover:bg-green-500 focus:bg-green-500",
  orange: "text-orange-500 hover:bg-orange-500 focus:bg-orange-500",
  cyan: "text-cyan-500 hover:bg-cyan-500 focus:bg-cyan-500",
  blue: "text-blue-500 hover:bg-blue-500 focus:bg-blue-500",
};

const filterData = (orgData, filter) => {
  return filter ? orgData.filter((e) => e.source.includes(filter)) : orgData;
};

export default function Page() {
  const [data, setData] = useState(dummyData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orgData, setOrgData] = useState(dummyData);

  const handleFilter = (filter) => {
    const newData = filterData(orgData, filter);
    setData(newData);
  };

  return (
    <section className="px-4">
      <div className="flex flex-col items-center justify-between w-full gap-2 my-2 sm:flex-row">
        <Heading size="sm" className="font-black">
          Our Farms
        </Heading>

        <div className="flex items-center justify-center gap-4 p-4 flex-end">
          <Button onClick={() => handleFilter("")} className={`${buttonStyles.base} ${buttonStyles.green}`}>
            all
          </Button>
          <Button onClick={() => handleFilter("solar")} className={`${buttonStyles.base} ${buttonStyles.orange}`}>
            solar
          </Button>
          <Button onClick={() => handleFilter("hydro")} className={`${buttonStyles.base} ${buttonStyles.cyan}`}>
            hydro
          </Button>
          <Button onClick={() => handleFilter("wind")} className={`${buttonStyles.base} ${buttonStyles.blue}`}>
            wind
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {data.map((item, key) => (
          <Dialog >
          <DialogTrigger>
             <FarmCard key={key} item={item} />
          </DialogTrigger>
          <DialogContent>
          <ScrollArea className="h-[80vh] rounded-md border ">
              <FarmExpandedCard
              title={item.title}
              company={item.company}
              currency="$"
              minInv={item.minInv}
              source={item.source}
              profitPillDesc={item.greenPillData}
              projectDescription={item.projectDescription}
            />
        </ScrollArea>
          </DialogContent>
        </Dialog>
        
        ))}
      </div>

    </section>
  );
}
