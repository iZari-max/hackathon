"use client"
import Link from 'next/link'
import React from 'react'
import animateData from "@/public/successfulPurchase.json"
import Lottie from "lottie-react";
import Clear from '@/components/Clear';





export default function page() {

  Clear()
  return (
    <div>
      <div className='px-8 p-24 flex flex-col gap-16 justify-center items-center '>
      <div className='w-48'>
      <Lottie animationData={animateData
        } loop={true} />
      </div>
        <span className='text-4xl font-bold flex gap-x-4 text-gray-600'>
        
          Thankyou for shopping with us!</span>
        <Link href="/products" className='flex flex-row items-center gap-x-2 text-gray-600 border-2 border-gray-200 wfont-semibold rounded-md px-4 py-1 hover:bg-sky-500 hover:text-white' >
            Continue shopping 
            </Link>
    </div>
    </div>
  )
}
