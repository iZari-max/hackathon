"use client"
import React from 'react';
import getStripePromise from '@/lib/stripe';
import { CartItem } from '@/interfaces';
import { urlForImage } from '@/sanity/lib/image';

interface Props{
    cartItem: CartItem []
}

export const Checkout = ({cartItem}:Props) => {

    

  
  const products =cartItem.map((item)=>({
    product: item.product._id,
    name: item.product.title,
    price: item.product.price,
    quantity: item.qty,
    image: urlForImage(item.product.image).url()

  }));




  const handleCheckout = async () => {
    const stripe = await getStripePromise();

    try {
      const response = await fetch("/api/stripeSession", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        cache: "no-cache",
        body: JSON.stringify(products),
      });

      
      

      if (!response.ok) {
        throw new Error(`Checkout request failed: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
console.log(data.session)
      if (data.session) {
        stripe?.redirectToCheckout({ sessionId: data.session.id });
      } else {
        console.error("Invalid response from server:", data);
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }

    
  };

  return (
    <div>
      <button className="px-6 py-2 border rounded-full hover:bg-sky-400 hover:text-white border-violet-400" onClick={handleCheckout}>
      <span className="sr-only sm:not-sr-only">Continue to </span>Checkout
      </button>
     
    </div>
  );
};