"use client"
import React from 'react'
// import { ShoppingCart } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';
import { IoMenu } from "react-icons/io5"
import { AiOutlineCloseCircle } from "react-icons/ai"
import CartButton from '../CartButton';
import { SignOutButton, useAuth, useUser } from '@clerk/nextjs';
import { SignInButton, UserButton } from "@clerk/nextjs";
import { useState } from 'react';



export default function Navigation() {

  const [navbarOpen, setNavbarOpen] = useState(false);
  

  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { user } = useUser();

  return (
    <div className="text-gray-600 body-font sticky top-0  bg-white z-10 shadow-sm shadow-gray-200">
      <div className="container mx-auto flex flex-wrap p-5 gap-x-6 flex-row justify-around items-center">
        <button className=' md:block lg:hidden'  onClick={() => setNavbarOpen((prev) => !prev)}>{navbarOpen? <AiOutlineCloseCircle className='text-2xl' />: <IoMenu className='text-2xl' />}</button>
        <Link href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image src="/logoHeader.png" width={500} height={500} alt="logo header" className='w-[120px] ' />
        </Link>
        <nav className="hidden  md:ml-auto md:mr-auto gap-x-6 lg:flex flex-wrap items-center text-base justify-center font-semibold text-gray-500">
          <Link href={"/products"} className=" hover:text-sky-500 hover:border-b-2 hover:border-black/[.70] focus:border-b-2 focus:border-black/[.50] focus:text-sky-500">TECHS</Link>
          <Link href={"/inputDevices"} className=" hover:text-sky-500 hover:border-b-2 hover:border-black/[.70] focus:border-b-2 focus:border-black/[.50] focus:text-sky-500">INPUT</Link>
          <Link href={"/outputDevices"} className=" hover:text-sky-500 hover:border-b-2 hover:border-black/[.70] focus:border-b-2 focus:border-black/[.50] focus:text-sky-500">OUTPUT</Link>
          <Link href={"/processors"} className=" hover:text-sky-500 hover:border-b-2 hover:border-black/[.70] focus:border-b-2 focus:border-black/[.50] focus:text-sky-500">PROCESSORS</Link>
          <Link href={"/storageDevices"} className=" hover:text-sky-500 hover:border-b-2 hover:border-black/[.70] focus:border-b-2 focus:border-black/[.50] focus:text-sky-500">STORAGE</Link>
          <Link href={"/accessories"} className=" hover:text-sky-500 hover:border-b-2 hover:border-black/[.70] focus:border-b-2 focus:border-black/[.50] focus:text-sky-500">ACCESSORIES</Link>

        </nav>
        <div className='flex gap-x-4'>
          {!isLoaded || !userId ?
            <button className='font-semibold border-2 px-4 py-1 hidden lg:block border-gray-200 rounded-full hover:bg-sky-500 hover:text-white'>
              <SignInButton />
            </button> :
            <div className='flex gap-x-4'>
              <UserButton afterSignOutUrl="/" />
            </div>

          }

        </div>



        {/* <div className='relative'>
    <button className="inline-flex items-center hover:bg-gray-100 border-0 py-1 pl-6 focus:outline-non rounded text-base mt-4 md:mt-0">
    <ShoppingCart className="mr-2 h-8 w-5 relative" />
    <span className='text-white rounded-full w-6 h-6 bg-red-600 absolute top-0 left-0'>0</span>
    </button>
    </div> */}
        <Link href={"/cart"}>
          <CartButton />
        </Link>
      </div>
      {/* mobile nav */}


      {navbarOpen && (
        <div>
          
        <div className='flex flex-col w-full bg-gray-50 h-screen relative gap-y-8'>
        
        {!isLoaded || !userId ?
          <button className='font-semibold border-2 px-4 w-[35%] mt-8 mx-auto py-1 border-gray-200 rounded-full hover:bg-sky-500 hover:text-white'>
            <SignInButton />
          </button> :
          <button className='font-semibold border-2 px-4 w-[35%] mt-8 mx-auto py-1 border-gray-200 rounded-full hover:bg-sky-500 hover:text-white'>
          <SignOutButton />
        </button>

        }

      
          <nav className="gap-y-6 flex flex-col flex-wrap items-center text-base justify-center font-semibold text-gray-500">
          <Link href={"/products"} className=" hover:text-sky-500 hover:border-b-2 hover:border-black/[.70] focus:border-b-2 focus:border-black/[.50] focus:text-sky-500">TECHS</Link>
          <Link href={"/inputDevices"} className=" hover:text-sky-500 hover:border-b-2 hover:border-black/[.70] focus:border-b-2 focus:border-black/[.50] focus:text-sky-500">INPUT</Link>
          <Link href={"/outputDevices"} className=" hover:text-sky-500 hover:border-b-2 hover:border-black/[.70] focus:border-b-2 focus:border-black/[.50] focus:text-sky-500">OUTPUT</Link>
          <Link href={"/processors"} className=" hover:text-sky-500 hover:border-b-2 hover:border-black/[.70] focus:border-b-2 focus:border-black/[.50] focus:text-sky-500">PROCESSORS</Link>
          <Link href={"/storageDevices"} className=" hover:text-sky-500 hover:border-b-2 hover:border-black/[.70] focus:border-b-2 focus:border-black/[.50] focus:text-sky-500">STORAGE</Link>
          <Link href={"/accessories"} className=" hover:text-sky-500 hover:border-b-2 hover:border-black/[.70] focus:border-b-2 focus:border-black/[.50] focus:text-sky-500">ACCESSORIES</Link>

          </nav>

        </div>
        </div>
        )}
    </div>
  )
}
