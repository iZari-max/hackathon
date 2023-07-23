import Link from 'next/link'
import React from 'react'
import {BsFillCartXFill,BsFillBagPlusFill} from "react-icons/bs"

export default function EmptyCart() {
  return (
    <div className='px-8 p-24 flex flex-col gap-16 justify-center items-center '>
        <span className='text-4xl font-bold flex gap-x-4 text-gray-600'>Cart is Empty <BsFillCartXFill/></span>
        <Link href="/products" className='flex flex-row items-center gap-x-2 text-gray-600 border-2 border-gray-200 wfont-semibold rounded-md px-4 py-1 hover:bg-sky-500 hover:text-white' >
            Shop here <BsFillBagPlusFill/> 
            </Link>
    </div>
  )
}
