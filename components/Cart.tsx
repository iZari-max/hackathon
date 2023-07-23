"use client"
import { CartItemCards } from '@/components/CartItemCards'
import EmptyCart from '@/components/EmptyCart'
import { useAppSelector } from '@/store/store'
import React from 'react'
import { totalPriceSelector } from '@/store/features/cartSlice'
import Link from 'next/link'
import { Checkout } from '@/components/Checkout'
import { CartItem } from '@/interfaces'

export default function page() {
  const cartItems = useAppSelector(state => state.cart.cartItems) || undefined
  const total = useAppSelector(totalPriceSelector)
  return (
    <div className=''>
      <h2 className='text-lg font-semibold text-slate-800 text-left mt-8 ml-8'></h2>
      {cartItems.find((el) => el.product._id == el.product._id) ?

        <div className='flex flex-col lg:flex-row w-full'>
          <div className='w-full lg:w-1/2  lg:h-96 lg:overflow-y-scroll lg:scroll-smooth lg:my-24 lg:mx-16'>
          {
            cartItems.map((item: CartItem) => (
              <CartItemCards cartItem={item} />
            ))} </div>

          <div className=' w-full lg:w-1/2 px-24 py-20 gap-y-8'>
            <div className="space-y-1 text-left">
              <p>Total amount:
                <span className="font-semibold">{total} Rs</span>
              </p>
              <p className="text-sm text-gray-400">Not including taxes and shipping costs</p>
            </div>
            <div className="flex justify-start space-x-4">
              <Link href={"/products"} className="px-6 py-2 border rounded-md hover:bg-sky-400 hover:text-white border-violet-400">Back
                <span className="sr-only sm:not-sr-only"> to shop</span>
              </Link>
              <Checkout cartItem={cartItems}/>
            </div>
          </div>

        </div>

        : <div className='w-full'><EmptyCart /></div>
      }

    </div>
  )
}
