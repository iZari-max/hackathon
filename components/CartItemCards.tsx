import { CartItem } from '@/interfaces'
import React from 'react'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'
import QtyButton from './QtyButton'
import { useAppDispatch } from '@/store/store'
import { decrement, increment, remove } from '@/store/features/cartSlice'
import ItemRemove from './ItemRemove'


interface Props {
  cartItem: CartItem
}
export const CartItemCards = ({ cartItem }: Props) => {
  const dispatch = useAppDispatch()
  
  return (
    // <div className='grid grid-cols-1 lg:grid-cols-4 justify-around ml-auto items-center'>

    //   <div className=''>
    //   <Image
    //     alt="ecommerce"
    //     className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
    //     width={500} height={500}
    //     src={urlForImage(cartItem.product.image).url()}
    //   />
    //   </div>
    //   <div className=''>
    //   <span>{cartItem.product.price} PKR</span>
    //   </div>
    //   <div className=''>
    //   <QtyButton
    //     onDecrease={() => dispatch(decrement(cartItem.product))}
    //     onIncrease={() => dispatch(increment(cartItem.product))}
    //     qty={cartItem.qty}
    //   />
    //   </div>
    //   <div className=''>
    //   <p>{total}</p>
    //   </div>
    // </div>

    <div>
      <div className="flex flex-col max-w-3xl p-6 space-y-2 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
        
        <ul className="flex flex-col divide-y divide-gray-700">
          <li className="flex flex-col sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
              <Image
        alt="ecommerce"
        className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
        width={500} height={500}
        src={urlForImage(cartItem.product.image).url()}
      />
              <div className="flex flex-col justify-between w-full pb-4">
                <div className="flex justify-between w-full pb-2 space-x-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leadi sm:pr-8">{cartItem.product.title}</h3>
                    <p className="text-sm dark:text-gray-400">{cartItem.product.category.title}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">{cartItem.product.price} Rs</p>
                    {/* <p className="text-sm line-through dark:text-gray-600">75.50€</p> */}
                  </div>
                </div>
                <div className='flex justify-between'>
                <div className="flex text-sm divide-x items-center px-2 py-1 space-x-1">
                  <ItemRemove onRemove={() => dispatch(remove(cartItem.product))} />
                  <span className="flex items-center px-2 py-1 space-x-1">
                    <QtyButton
                      onDecrease={() => dispatch(decrement(cartItem.product))}
                      onIncrease={() => dispatch(increment(cartItem.product))}
                      qty={cartItem.qty}
                    /></span>
                </div>
                <div>
                 Total: {cartItem.qty*cartItem.product.price} Rs
                </div>
                </div>
              </div>
            </div>
          </li>

        </ul>
        
      </div>
    </div>



    // <div>
    //  <div className="flex w-2/5">
    //     <div className="w-20">
    //       <Image className="" width={500} height={500} src={urlForImage(cartItem.product.image).url()} alt={cartItem.product.title}/>
    //     </div>
    //     <div className="flex flex-col justify-between ml-4 flex-grow">
    //       <span className="font-bold text-sm">{cartItem.product.title}</span>
    //       <span className="text-red-500 text-xs">{cartItem.product.category.title}</span>
    //     </div>
    //   </div>
    //   <div className="flex justify-center w-1/5">
    //     <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
    //     </svg>

    //     <input className="mx-2 border text-center w-8" type="text" value="1"/>

    //     <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
    //       <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
    //     </svg>
    //   </div>
    //   <span className="text-center w-1/5 font-semibold text-sm">{cartItem.product.price} PKR</span>
    // </div>


  )
}
