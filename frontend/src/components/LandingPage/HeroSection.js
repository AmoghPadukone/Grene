// components/HeroSection.js

import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="h-screen w-full relative flex flex-col items-center align-middle justify-around py-8">
      <Image
        src="/heroLogo.svg"
        alt="Hero Logo"
        width={500}
        height={350}
        className="pl-12"
        style={{ zIndex: "1" }}
        draggable="false"
      />
      <Image
        src="/heroPattern.svg"
        alt="Hero Pattern"
        width={1200}
        height={800}
        className="absolute right-0 top-0 "
        style={{ zIndex: "-1" }}
        draggable="false"
      />
      <h1 className="text-5xl text-center font-curvy">
        Your one stop for investing <br />
        in renewable parks
      </h1>
      <Image
        src="/button.svg"
        alt="Button"
        width={300}
        height={200}
        draggable="false"
        className="hover:cursor-pointer hover:scale-105  transition-all  active:scale-95"
      />
    </div>
  );
}
