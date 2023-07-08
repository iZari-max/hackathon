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
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-gray-900">Home</Link>
      <Link href={"/pages/products"} className="mr-5 hover:text-gray-900">Products</Link>
      <Link href={"/pages/contact"} className="mr-5 hover:text-gray-900">Contact</Link>
      <Link href={"/pages/about"} className="mr-5 hover:text-gray-900">About Us</Link>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
        <ShoppingCart className="mr-2 h-5 w-5" /> Start Shopping
    </button>
  </div>
    </div>
  )
}
