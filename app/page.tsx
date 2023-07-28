
import Banner from '@/components/banner/Banner'
import Gallery from '@/components/gallery/Gallery'
import Hero from '@/components/hero/Hero'
import Newsletter from '@/components/newsletter/Newsletter'
import Stats from '@/components/stats/Stats'
import WeOffer from '@/components/weOffer/WeOffer'

export default function Home() {
  return (
  <>
  <div className=' max-h-full'>
  <Hero/>
  {/* <Gallery /> */}
  <Banner/>
  <Stats/>
  <WeOffer/>
  <Newsletter/>
  </div>
  </>
  ) 
}
