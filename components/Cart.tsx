"use client"
import { CartItemCards } from '@/components/CartItemCards'
import EmptyCart from '@/components/EmptyCart'
import { useAppSelector } from '@/store/store'
import React from 'react'
import { totalPriceSelector } from '@/store/features/cartSlice'
import Link from 'next/link'
import { Checkout } from '@/components/Checkout'
import { CartItem } from '@/interfaces'
import { useAuth } from '@clerk/nextjs';
import { RedirectToSignIn } from '@clerk/nextjs'

const Cart = () => {
  // const { userId} = useAuth();
  const cartItems = useAppSelector(state => state.cart.cartItems) || undefined
  const total = useAppSelector(totalPriceSelector)
  return (
    //  userId ? 
    <div className=''>
      <h2 className='text-lg font-semibold text-slate-800 text-left mt-8 ml-8'></h2>
      {cartItems.find((el) => el.product._id == el.product._id) ?

        <div className='flex flex-col lg:flex-row w-full'>
          <div className='w-full lg:w-1/2  lg:h-96 lg:overflow-y-scroll thin-scrollbar lg:scroll-smooth lg:my-24 lg:mx-16'>
            {
              cartItems.map((item: CartItem) => (
                <div>
                  <CartItemCards key={item.product._id} cartItem={item} />
                  <hr />
                </div>
              ))} </div>

          <div className=' w-full lg:w-1/2 px-24 py-20 gap-y-8'>
            <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
              <h3 className="text-xl font-semibold leading-5 text-gray-800">Summary</h3>
              <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                <div className="flex justify-between  w-full">
                  <p className="text-base leading-4 text-gray-800">Subtotal</p>
                  <p className="text-base leading-4 text-gray-600">{total} Rs</p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base leading-4 text-gray-800">
                    Discount <span className="bg-gray-200 p-1 text-xs font-medium leading-3  text-gray-800">NONE</span>
                  </p>
                  <p className="text-base leading-4 text-gray-600">00 Rs</p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base leading-4 text-gray-800">Shipping</p>
                  <p className="text-base leading-4 text-gray-600">200 Rs</p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base leading-4 text-gray-800">Total</p>
                  <p className="text-base leading-4 text-gray-600">{total + 200} Rs</p>
                </div>
              </div>
            </div>
            <div className="flex justify-start space-x-4">
              <Link href={"/products"} className="px-6 py-2 border rounded-full hover:bg-sky-400 hover:text-white border-violet-400">Back
                <span className="sr-only sm:not-sr-only"> to shop</span>
              </Link>
              <Checkout cartItem={cartItems} />
            </div>

          </div>

        </div>

        : <div className='w-full'><EmptyCart /></div>
      }

    </div>
    // <div>
    //   <RedirectToSignIn/>
    // </div>


  )
}
export default Cart