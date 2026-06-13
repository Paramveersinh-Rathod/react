import React from 'react'
import HeroDesignVideo from '../assets/heroDesignVideo.mp4'
const HeroVideo = () => {
  return (
    <div className='w-1/2 py-14 px-18'>
       <div className='bg-red-200 w-full h-full rounded-3xl overflow-hidden'>
        <video className="w-full h-full object-cover scale-125"
          playsInline
          autoPlay
          muted
          loop
          src={HeroDesignVideo}
        />
       </div>
    </div>
  )
}

export default HeroVideo
