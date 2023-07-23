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

      console.log("products ", products);
      

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
      <button className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600" onClick={handleCheckout}>
        Checkout
      </button>
     
    </div>
  );
};