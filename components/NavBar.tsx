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
        <nav className="-pl-2 md:ml-0 w-full lg:max-w-7xl h-28 pt-8 lg:mx-auto bg-white dark:bg-black flex justify-between">
            {/* Logo*/}
       <Link href="/"> <Image src="/images/logo.png" alt="Alfred AI Logo" width={100} height={100} className='-mt-2 w-20 md:w-32 flex items-start'/></Link>
       
        <div className='hidden lg:flex gap-x-8'>
            
             {/*Theme Logic*/}
        <div> {theme === 'dark' ? (
              <MdOutlineLightMode className='md:mt-1 cursor-pointer' onClick={switchLight} size={26} color={'white'} />
            ) : (
              <MdDarkMode className='cursor-pointer md:mt-1' onClick={switchDark} size={26} />
            )}</div>
            
            {/* About Us Page Link */}
       <Link href="/about" className='text-gray-500 dark:text-gray-100 dark:hover:text-white hover:text-black text-md mt-1.5 font-medium'>About-us</Link>
      
       <div className='flex gap-x-4'>
        {/*LoginIn/Register Link */}
        <Link href="" className='text-gray-500 dark:text-gray-100 dark:hover:text-white hover:text-black text-md mt-1.5 font-medium'>Login/Register</Link>
        {/* Chat Page Link */}
        <Link href="/demo" className='text-gray-500 dark:text-gray-100 dark:hover:text-white hover:text-black text-md mt-1.5 font-medium'>Chat</Link>
        </div>
        </div>
            
           {/* Hamburger Menu for Mobile Screen*/} 
          <HamBurger/>

        </nav>
    );
}

export default NavBar;