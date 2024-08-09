"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import HamBurger from './HamBurger';
import { ThemeContext } from '@/components/Theme';
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";


//Navbar Component Function
const NavBar = () => {
 const {theme,switchDark,switchLight} = useContext(ThemeContext);
    return (
        <nav className="-pl-2 md:ml-0 w-full lg:max-w-7xl h-28 pt-8 lg:mx-auto bg-white dark:bg-slate-800 flex justify-between">
            {/* Logo*/}
       <Link href="/"> <Image src="/images/logo.png" alt="Alfred AI Logo" width={150} height={150} className='-mt-2 w-36 md:w-48 flex items-start'/></Link>
       
        <div className='hidden lg:flex gap-x-8'>
            {/* About Us Page Link */}
       <Link href="/about" className='text-gray-700 dark:text-gray-100 dark:hover:text-white hover:text-black text-lg mt-1.5 font-medium'>About-us</Link>
       {/*Theme Logic*/}
      <div> {theme === 'dark' ? (
              <MdOutlineLightMode className='md:mt-2 cursor-pointer' onClick={switchLight} size={28} color={'white'} />
            ) : (
              <MdDarkMode className='cursor-pointer md:mt-2' onClick={switchDark} size={28} />
            )}</div>
       <div className='flex gap-x-4'>
        {/* Sign In Button */}
         <button className='h-10 w-20 font-medium flex justify-center items-center text-gray-900 hover:text-white text-sm bg-white hover:bg-green-600 border-2 border-gray-900 dark:border-white dark:hover:border-none rounded-md'>Sign in</button>
        {/* Sign Up Button */}
        <button className='h-10 w-20 flex justify-center items-center font-medium text-white hover:text-gray-900 text-sm bg-green-600 hover:bg-white border-2 border-gray-900 dark:border-none rounded-md'>Sign up</button>
        </div>
        </div>
            
           {/* Hamburger Menu for Mobile Screen*/} 
          <HamBurger/>

        </nav>
    );
}

export default NavBar;