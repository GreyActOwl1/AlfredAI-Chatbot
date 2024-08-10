import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        <div className="pt-20 pb-20 min-h-screen bg-white dark:bg-black">
            {/* Heading text*/}
<h1 className='text-2xl md:text-4xl text-gray-500 dark:text-gray-100 font-semibold text-center'><span className='text-green-600  '>Alfred AI</span>, a smart chatbot</h1>

{/* Features part*/}
<div className="mt-16">
    {/* Features heading*/}
<h3 className="text-xl md:text-[26px] font-semibold text-gray-500/95 dark:text-gray-100 text-center">Features</h3>
{/* Features  text part*/}
<div className="flex mt-6 items-center justify-center gap-x-16 md:gap-x-24 bg-gray-200 rounded-md w-full h-auto p-4 md:p-4 md:h-32">
 <div className="flex flex-col gap-y-0.5">
    <h5 className="text-gray-600 font-semibold text-md md:text-lg">Context Aware</h5>
    <p className="text-gray-500 text-sm md:text-md whitespaace-nowrap">Keeps the context from</p>
    <p className="text-gray-500 text-sm md:text-md">previous conversation</p>
 </div>
 <div className="flex flex-col gap-y-0.5">
    <h5 className="text-gray-600 font-semibold text-md md:text-lg">Sort by topics</h5>
    <p className="text-gray-500 text-sm md:text-md">User can add topics to</p>
    <p className="text-gray-500 text-sm md:text-md">organize their chats</p>
 </div>
</div>
    </div>  

    {/* Buttons */}
    <div className="flex justify-center gap-x-6 mt-8">
<button className='w-36 md:w-48 h-12 rounded-md flex justify-center border-2 border-gray-300  dark:border-none items-center font-semibold text-md md:text-lg bg-white hover:text-white hover:border-green-700 hover:bg-green-700'><Link href="">Login/Register</Link></button>
<button className='w-36 md:w-48 h-12 rounded-md flex justify-center border-2 border-green-700 dark:border-none items-center font-semibold text-md md:text-lg hover:border-gray-300 text-white bg-green-700 hover:text-black hover:bg-white'><Link href="/demo">Chat</Link></button>

    </div>
        </div>
    );
}

export default Hero;
