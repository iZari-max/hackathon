import React from 'react'

interface Props{
    onRemove: ()=>void
}
export default function ItemRemove(props:Props) {
    
  return (
    <div>
        <button onClick={props.onRemove} className="mr-2 px-2 py-1 rounded-md outline outline-1 outline-red-500 text-red-500">         
        Remove
        </button>
    </div>
  )
}
