"use client"
import React from 'react'
import { ShoppingCart } from "lucide-react";
import Link from 'next/link';




export default function Navigation() {
  return (
    <div className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src="/logoHeader.png" alt="logo header" className='w-[120px]' />
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-semibold text-gray-500">
      <Link href={"/products"} className="mr-5 hover:text-sky-500">TECHS</Link>
      <Link href={"/inputDevices"} className="mr-5 hover:text-sky-500">INPUT</Link>
      <Link href={"/outputDevices"} className="mr-5 hover:text-sky-500">OUTPUT</Link>
      <Link href={"/processors"} className="mr-5 hover:text-sky-500">PROCESSORS</Link>
      <Link href={"/storageDevices"} className="mr-5 hover:text-sky-500">STORAGE</Link>
      <Link href={"/accessories"} className="mr-5 hover:text-sky-500">ACCESSORIES</Link>

    </nav>
    <div className='relative'>
    <button className="inline-flex items-center hover:bg-gray-100 border-0 py-1 pl-6 focus:outline-non rounded text-base mt-4 md:mt-0 ">
    
    <ShoppingCart className="mr-2 h-5 w-5 relative" />
    <span className='text-white rounded-full w-6 h-6 bg-red-600 absolute top-0 left-0'>0</span>
    </button>
    </div>
  </div>
    </div>
  )
}
