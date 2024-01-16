"use client";
import React, { useState } from "react";
import Heading from "@/components/Primitives/Heading";
import FarmCard from "@/components/Farms/FarmCard";
import FilterPill from "@/components/Farms/FilterPill";
import FarmExpandedCard from "@/components/Farms/FarmExpandedCard";
import { dummyData } from "@/utils/dummyData";
import { Button } from "@/components/ui/button";

export default function page() {
  console.log(dummyData);
  const [data, setData] = useState(dummyData);
  const [orgData, setOrgData] = useState(dummyData);
  return (
    <section className="px-4">
      <div className="flex flex-col items-center justify-between w-full gap-2 my-2 sm:flex-row">
        <Heading size="sm" className="font-black">
          Our Farms
        </Heading>

        <div className="flex items-center justify-center gap-4 p-4 flex-end">
          {/* <FilterPill source="solar" selectable={true} />
          <FilterPill source="hydro" selectable={true} />
          <FilterPill source="wind" selectable={true} /> */}

          <Button
            onClick={() => {
              setData(orgData);
            }}
            className="bg-transparent border-gray-300 shadow-transparent border-2 rounded-full text-green-500 hover:text-white hover:bg-green-500 focus:bg-green-500 focus:text-white"
          >
            all
          </Button>

          <Button
            onClick={() => {
              const newData = orgData.filter((e) => e.source.includes("solar"));
              console.log(data);
              setData(newData);
            }}
            className="bg-transparent border-gray-300 shadow-transparent border-2 rounded-full text-orange-500 hover:text-white hover:bg-orange-500 focus:bg-orange-500 focus:text-white"
          >
            solar
          </Button>

          <Button
            onClick={() => {
              const newData = orgData.filter((e) => e.source.includes("hydro"));
              console.log(data);
              setData(newData);
            }}
            className="bg-transparent border-gray-300 shadow-transparent border-2 rounded-full text-cyan-500 hover:text-white hover:bg-cyan-500 focus:bg-cyan-500 focus:text-white"
          >
            hydro
          </Button>

          <Button
            onClick={() => {
              const newData = orgData.filter((e) => e.source.includes("wind"));
              console.log(data);
              setData(newData);
            }}
            className="bg-transparent border-gray-300 shadow-transparent border-2 rounded-full text-blue-500 hover:text-white hover:bg-blue-500 focus:bg-blue-500 focus:text-white"
          >
            wind
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
        {data.map((item,key) => {
          return (
            <FarmCard
            key={item.id}
              thumbnail={item.image}
              thumbnail_description="An image of solar panel"
              title={item.projectName}
              company={item.company}
              currency="$"
              minInv={item.minInv}
            />
          );
        })}
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
  );
}
