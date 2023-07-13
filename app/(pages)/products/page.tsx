
import React from 'react'
import { client } from '@/sanity/lib/client'
import { Image as IImage } from 'sanity'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'


const getData = async () => {
  const res = await client.fetch(`*[_type == 'product' ]
  {
    _id,
    title,
    image, 
    description,
    price, 
    category -> {
      title
    }
  }`)

  // console.log(res);
  return res;


}

interface ProductT {
  title: string,
  _id: string,
  price: number,
  image: IImage,
  description: string,
  category: {
    title: string
  }
}


export default async function page() {

  const data: ProductT[] = await getData();





  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="w-full mx-auto grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 -m-4">

          {data.map((item) =>
          (
            
              <div key={item._id} className="flex flex-col justify-between border-2 border-gray-200 gap-y-2 p-4 w-full h-[500px] cursor-pointer hover:shadow-2 hover:shadow-sky-500 hover:shadow-md">
              <div>
              <Link href={`/productDetails/${item._id}`} className="block relative h-84 rounded overflow-hidden">
                <Image alt="ecommerce" className="object-contain object-center w-full h-[200px]  " width={500} height={500} src={urlForImage(item.image).url()} />
              </Link>
              </div>
              <div className="flex flex-col mt-4">
                <div>
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.category.title}</h3>
                  <div className='flex items-center justify-between'>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                    <p className="mt-1 text-gray-900">PKR {item.price}</p>
                  </div>
                  <p className="mt-3 overflow-y-hidden">{item.description}</p>
                </div>

                {/* <div className=''>
                  <button className='bg-indigo-600 text-white py-2 px-4 rounded-md'>Add to cart</button>
                </div> */}
              </div>
            </div>

          ))}

        </div>
      </div>
    </section>
  )
}
