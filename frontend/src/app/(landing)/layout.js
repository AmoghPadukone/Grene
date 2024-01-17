import React from 'react'


import Navbar from "@/components/Navbar/Navbar";

  const contentList = [
    { name: "Start Investing", url: "/login", isButton:true,mobile:true },
  ];
  
export default function Layout({children}) {
  return (
        <>
      <Navbar contentList={contentList}/>


        {children}
        </>
    )
}
