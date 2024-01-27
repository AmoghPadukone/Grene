import React from 'react'
import Image from 'next/image'
import LogoSmall from '@/assets/logo-sm.svg';
import LogoWithText from '@/assets/Grene.svg'
export default function Navbar() {
  return (
    <nav className='p-2 m-2 bg-white rounded-md'>
        <div>
            {/*logo section  */}

            <Image src={LogoWithText} alt='Grene logo'  />
        </div>
    </nav>
  )
}
