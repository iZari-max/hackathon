import React from 'react'
import { ShoppingCart } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-full lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Vista-Vision: Immerse Yourself in Limitless Worlds with the Ultimate VR Glasses Experience!
        <br className="hidden lg:inline-block" />
      </h1>
      <p className="mb-8 leading-relaxed">VistaVision takes virtual reality to a whole new level, offering an unparalleled immersive experience that transports you to limitless worlds right from the comfort of your living room. With cutting-edge technology and stunning visuals, VistaVision VR Glasses redefine the way you perceive and interact with virtual environments.
      </p>
      <div className="flex justify-center">
        {/* <button className="inline-flex text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded text-lg">See Details</button> */}
        <Link href="/products" className='flex mx-auto'><button className="flex text-white bg-sky-500 border-0 py-2 px-8 focus:outline-none hover:bg-sky-400 rounded text-lg">Shop here</button></Link>

      </div>
    </div>
    <div className="lg:max-w-lg hidden lg:block lg:w-full md:hidden w-5/6">
      <Image className="object-cover object-center rounded" alt="hero" src={"/heroImage.png"} width={500} height={500}/>
    </div>
  </div>
</section>
  )
}