"use client"
import React from 'react'
import { ShoppingCart } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';
import { IoMenu } from "react-icons/io5"
import CartButton from '../CartButton';




export default function Navigation() {
  return (
    <div className="text-gray-600 body-font sticky top-0 bg-white z-10 shadow-sm shadow-gray-200">
  <div className="container mx-auto flex flex-wrap p-5 gap-x-6 flex-row  items-center">
    <button className=' md:block lg:hidden'><IoMenu/></button>
    <Link href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src="/logoHeader.png" alt="logo header" className='w-[120px]' />
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
      <button className='font-semibold border-2 px-4 py-1 hidden lg:block border-gray-200 rounded-full hover:bg-sky-500 hover:text-white'>
        Sign In
      </button>
      <div className=''>
        <Image src={"/heroImage.jpg"} width={500} height={500} alt='userProfile' className='rounded-full w-10 h-10 object-cover object-center'></Image>
      </div>
    </div>
    {/* <div className='relative'>
    <button className="inline-flex items-center hover:bg-gray-100 border-0 py-1 pl-6 focus:outline-non rounded text-base mt-4 md:mt-0">
    <ShoppingCart className="mr-2 h-8 w-5 relative" />
    <span className='text-white rounded-full w-6 h-6 bg-red-600 absolute top-0 left-0'>0</span>
    </button>
    </div> */}
    <Link href={"/cart"}>
    <CartButton/>
    </Link>
  </div>
    </div>
  )
}
