// "use client";
// import { useRouter } from "next/navigation";

import React from "react";

export default function Navbar({ contentList }) {
  // const router = useRouter();

  return (
    <nav className="absolute top-0  z-50 left-0 flex items-center justify-between w-full px-8 py-2 mb-3 bg-transparent max-md:px-4">
      <div>
        <img src="/Grene.svg" />
      </div>
      <div>
        {contentList.map((item, index) => (
          <button
            className={`mx-2  pointer-cursor
                                    ${
                                      item.isButton
                                        ? "bg-black  p-2 px-5 rounded-full text-white "
                                        : ""
                                    }
                                    ${item.mobile ? "" : "max-md:hidden"}`}
          >
            <a
              key={index}
              href={item.url}
              // onClick={() => {
              //   console.log("clicked");
              // }}
            >
              {item.name}
            </a>
          </button>
        ))}
      </div>
    </nav>
  );
}
