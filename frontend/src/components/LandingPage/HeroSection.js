// components/HeroSection.js

import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="h-screen w-full relative flex flex-col items-center align-middle justify-around py-8">
      <Image
        src="/heroLogo.svg"
        alt="Hero Logo"
        width={500}
        height={350}
        className='pl-12'
        style={{zIndex:"999"}}
      />
      <Image
        src="/heroPattern.svg"
        alt="Hero Pattern"
        width={1200}
        height={800}
        className='absolute right-0 top-0 z-1'
      />
      <h1 className='text-5xl text-center' style={{ fontFamily:"MuseoModerno,sans-serif"}}>Your one stop for investing <br/>in renewable parks</h1>
      <Image
        src="/button.svg"
        alt="Button"
        width={300}
        height={200}
      />
    </div>
  );
}
