import React from 'react'
import { BsTrash } from "react-icons/bs"

interface Props {
    onIncrease: ()=>void
    onDecrease: ()=>void
    qty:number
}
export default function QtyButton(props: Props) {
  return (
    <div className='flex gap-2 justify-center items-center'>
        <button className='font-bold text-xl py-2 px-2 text-red-600' onClick={props.onDecrease}>{props.qty===1? <BsTrash />: "-"}</button>
        <p>{props.qty}</p>
        <button className='font-bold text-xl py-2 px-2 text-green-600' onClick={props.onIncrease}>+</button>
    </div>
  ) 
}
