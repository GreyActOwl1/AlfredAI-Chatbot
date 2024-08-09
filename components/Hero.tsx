import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <div className="pt-36 pb-20 bg-white dark:bg-slate-800">
            {/* Heading text*/}
<h1 className='text-2xl md:text-4xl text-gray-800 dark:text-gray-100 font-bold text-center'><span className='text-green-600 font-extrabold '>Alfred AI</span> is a smart way to chat with AI</h1>

{/* Integrations part*/}
<div className="mt-16">
    {/* Integrations text*/}
<h3 className="text-xl md:text-[26px] font-semibold text-gray-500/95 dark:text-gray-100 text-center">Integrations with</h3>
{/* Images part*/}
<div className="flex mt-6 items-center justify-evenly bg-gray-200  border-t border-b border-gray-500 dark:border-black rounded-md w-full h-28">
 
 <Image src="/images/OpenAi.png" alt="Open AI Logo" width={200} height={200} className='w-24 h-20 md:w-52 md:h-24 mt-1 object-contain'/>
 <Image src="/images/Gemini.png" alt="Gemini Logo" width={200} height={200} className='w-24 h-16 md:w-52 -mt-2 md:h-24 object-contain'/>
 <Image src="/images/LlamaAi.png" alt="Llama AI logo" width={200} height={200} className='w-24 h-16 md:w-52 md:h-24 object-cover'/>
</div>
    </div>  
{/* Try now part */}
<div className='pt-12 md:pt-16 flex flex-col gap-y-4'>
    {/*Try now text*/}
    <h4 className="text-black dark:text-gray-100 font-bold text-center text-2xl md:text-3xl">Try now !</h4>
    {/* Buttons */}
    <div className="flex justify-center gap-x-6 mt-4">
<button className='w-36 md:w-40 h-12 rounded-md flex justify-center border-2 border-black  dark:border-white items-center font-semibold text-lg bg-white hover:text-white hover:bg-green-600'>Sign In</button>
<button className='w-36 md:w-40 h-12 rounded-md flex justify-center border-2 border-black dark:border-white items-center font-semibold text-lg text-white bg-green-600 hover:text-black hover:bg-white'>Sign Up</button>

    </div>
        </div></div>
    );
}

export default Hero;
