  "use client "
import React from 'react'
import Lottie from 'lottie-react'
import LoadingData from "@/public/LoadingData.json"


export default function Loading() {
  return (
        <div className='px-8 p-24 h-screen flex flex-col gap-16 justify-center items-center '>
      <div className='w-48 h-48'>
      <Lottie animationData={LoadingData
        } loop={true} />
      </div>
    </div>
  )
}
