"use client";
import { useMediaQuery } from "@react-hook/media-query";
import Image from "next/image";

export default function Steps() {
  const isMobile = useMediaQuery("(max-width: 800px)");

  return isMobile ? <StepsMobile /> : <StepsDesktop />;
}

//patch code cause i am running short on time... sorry shivam 💋
function StepsDesktop() {
  return (
    <div className="h-full pb-[5%] px-[10vw]">
      <div className="text-6xl pb-[10%] lg:pb-[2%] tracking-wider text-center font-[600] font-curvy">
        {" "}
        Investments are hard. We simplify it.
      </div>

      <div id="content" className=" flex ">
        <div className="lefty   mx-auto">
          <Image
            className="relative py-10"
            draggable="false"
            src="/steps.png"
            alt="solar curve banner"
            width={500}
            // fill={true}
            // sizes="(max-width: 768px) 100%, (max-width: 1200px) 50vw, 33vw"
            height={350}
          />
        </div>
        <div className="righty text-3xl lg:text-4xl 2xl:text-5xl w-[60%] xl:w-[50%]  pl-[5%] my-auto flex flex-col gap-20 xl:gap-28">
          <div id="point1" className=" font-curvy flex flex-row gap-10">
            <div id="number" className="font-semibold font-curvy my-auto">
              1
            </div>
            <div id="step" className="font-curvy">
              Invest in renewable farms
            </div>
          </div>
          <div id="point2" className="flex flex-row gap-10">
            <div id="number" className="font-semibold font-curvy my-auto">
              2
            </div>
            <div id="step" className="font-curvy">
              We sell the electricity to discoms
            </div>
          </div>
          <div id="point3" className="flex flex-row gap-10">
            <div id="number" className=" font-semibold font-curvy my-auto">
              3
            </div>
            <div id="step" className="font-curvy">
              Profits are shared according to investment made
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function StepsMobile() {
  return (
    <div className=" py-[5%] pb-[15%] px-[5vw]">
      <div className="text-[28px] tracking-wider text-left font-[600] font-curvy">
        {" "}
        Investments are hard.
        <br /> We simplify it.
      </div>

      <div id="content" className=" flex justify-center ">
        <div className="text-2xl px-[5%]  flex flex-col my-[15%] gap-20">
          <div
            id="point1"
            className=" font-curvy  text-right  flex flex-row justify-between gap-10"
          >
            <div
              id="number"
              className="text-4xl my-auto text-left font-semibold font-curvy"
            >
              1
            </div>
            <div id="step" className="font-curvy ">
              Invest in renewable farms
            </div>
          </div>
          <div
            id="point2"
            className=" font-curvy   flex justify-between flex-row gap-10"
          >
            <div id="step" className="font-curvy text-left">
              We sell the electricity to discoms{" "}
            </div>
            <div
              id="number"
              className="text-4xl my-auto text-right font-semibold font-curvy"
            >
              2
            </div>
          </div>
          <div
            id="point3"
            className=" font-curvy text-right  flex justify-between flex-row gap-10"
          >
            <div
              id="number"
              className="text-4xl my-auto  text-left font-semibold font-curvy"
            >
              3
            </div>
            <div id="step" className="font-curvy">
              Profits are shared according to investment made{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
