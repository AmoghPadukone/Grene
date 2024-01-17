// components/HeroSection.js

import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="h-screen overflow-y-hidden w-full relative flex flex-col items-center align-middle justify-around py-8">
      <Image
        src="/heroPattern.svg"
        alt="Hero Pattern"
        width={1200}
        height={800}
        className="absolute right-0 top-0 z-1"
      />
      <h1 className="text-6xl text-center font-curvy" style={{ zIndex: "999" }}
>
        Thank You For Reserving <br/> Your Solar Panel With Us!
      </h1>
    </div>
  );
}
