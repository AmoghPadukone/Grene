import React from 'react';


export default function Navbar({ contentList }) {
    return (
        <nav className='absolute top-0 left-0 flex items-center justify-between w-full px-8 py-2 mb-3 bg-transparent max-md:px-4'>
        <div>
            <img src="/Grene.svg" />
        </div>
        <div>
            {contentList.map((item, index) => (
                <button className={`mx-2  
                                    ${item.isButton ? "bg-black  p-2 px-5 rounded-full text-white " : ""}
                                    ${item.mobile ? "" : "max-md:hidden"}`
                }>
                    <a key={index} href={item.url}>
                        {item.name}
                    </a>
                </button>
            ))}
        </div>
    </nav>
    );
};

