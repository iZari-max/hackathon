import { client } from '@/sanity/lib/client'
import { Image as IImage } from 'sanity'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineRight } from "react-icons/ai"

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

export default async function Gallery() {
  const data: ProductT[] = await getData();
  var count:number =0; 
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Featured Techs</h1>
    </div>
    <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      { 
      data.map((item) =>(
      
      count < 6 &&
    <div className="flex relative">
          <Image width={500} height={350} alt="gallery" className="absolute inset-0 w-full h-full object-contain object-center border-2 border-gray-200 p-6" src={urlForImage(item.image).url()} />
          <div className="px-8 h-[330px] py-10 relative z-1 w-full border-4 border-gray-200 bg-white/[.95] opacity-0 hover:opacity-100">

            {/* <div className='flex  px-2 justify-around w-[40%] mx-auto items-center bg-white shadow-sm shadow-gray-600'>
              <button>details</button>
              <button>Add</button>

            </div> */}


            <div className='h-full '>
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">PKR {item.price}/- Only</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{item.title}</h1>
            <p className="leading-relaxed line-clamp-3">{item.description}</p>
            <div className='mt-16'>
            <Link href={`/productDetails/${item._id}`} className="rounded px-4 py-1 border-2 border-gray-200 font-semibold">Show details
            </Link>
            </div>
            </div>
          </div>
          <div className='hidden'>{count++}</div>
        </div>
        
      
      ))
        
        }

    </div>
    {/* <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image width={500} height={350} alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/galleryProduct.jpg" />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">SALE 40%</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image width={500} height={350} alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/galleryProduct.jpg" />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">SALE 30%</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image width={500} height={350} alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/galleryProduct.jpg" />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">SALE 20%</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image width={500} height={350} alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/galleryProduct.jpg" />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">SALE 50%</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image width={500} height={350} alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/galleryProduct.jpg" />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">SALE 30%</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <Link href="/products" className='flex mx-auto mt-20'><button className="flex text-white bg-sky-500 border-0 py-2 px-8 focus:outline-none hover:bg-sky-600 rounded text-lg">Discover More</button></Link>
    </div> */}
  </div>
</section>
  )
}
