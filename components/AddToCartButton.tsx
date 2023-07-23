"use client"
import { ProductT } from '@/interfaces'
import { decrement, increment, productQtySelector } from '@/store/features/cartSlice'
import { useAppDispatch, useAppSelector } from '@/store/store'
import React from 'react'
import QtyButton from './QtyButton'
import { ShoppingCart } from "lucide-react";

interface Props {
    product: ProductT
}

export const AddToCartButton = (props: Props)=> {

    const qty = useAppSelector(state=>
        productQtySelector(state, props.product._id)
        )

        const dispatch = useAppDispatch()

        if(!qty) return <div>
            <button  
            onClick={()=>dispatch(increment(props.product))} 
            className="flex text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded"
            >
            <ShoppingCart/>
            </button>
        </div>
        return(
            <div>
                <QtyButton 
                onDecrease={()=>dispatch(decrement(props.product))} 
                onIncrease={()=>dispatch(increment(props.product))} 
                qty={qty}/>
            </div>
        )
}
