import React from 'react'


  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


  
export default function Layout({children}) {
  return (
        <>
  <nav className='flex items-center justify-between w-full px-8 py-2 mb-3 max-md:px-4'>
            <div>
                <img src="/Grene.svg" />
            </div>
            <div>
            <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

            </div>
        </nav>


        {children}
        </>
    )
}
