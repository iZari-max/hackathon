"ues client"
import React from 'react'
import { ShoppingCart } from "lucide-react";
import { useAppSelector } from '@/store/store';
import { totalCartItemSelector } from '@/store/features/cartSlice';

interface Props {
    className ?: string
}


export default function CartButton(props:Props) {

    const totalItems = useAppSelector(totalCartItemSelector)

  return (
    <div className={`${props.className} relative`}>
        <ShoppingCart className="w-12" />
        {
        <div key={totalItems} className='bg-red-600 flex justify-center items-center rounded-full w-6 absolute -top-4 -right-1 text-white animate-pingOnce'>
            {totalItems}
        </div>
        }
    </div>
  )
}
