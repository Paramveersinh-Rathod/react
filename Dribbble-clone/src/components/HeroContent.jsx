import React from 'react'

const HeroContent = () => {
  return (
    <div className='flex flex-col py-15 px-15 gap-10 w-1/2'>
      <div className='max-w-[210px] flex justify-between items-center bg-gray-100 rounded-full font-semibold text-xs'>
        <div className='bg-white w-max h-max rounded-full py-3 px-5 border border-gray-300'>HIRE TALENT</div>
        <div className='w-max h-max  py-2 pr-5 text-gray-500'>GET HIRED</div>
      </div>
      <div>
        <div className='text-6xl font-semibold pb-4'>Work with the world's <br />best in <span className='text-pink-500'>product design</span></div>
        <div className='flex flex-col gap-4 py-5'>
          <p><i className="ri-check-line text-pink-700 p-1 bg-pink-200 rounded-full mr-2"></i>Generate your brief and receive proposals - for free</p>
          <p><i className="ri-check-line text-pink-700 p-1 bg-pink-200 rounded-full mr-2"></i>Browse real-world design and development work</p>
          <p><i className="ri-check-line text-pink-700 p-1 bg-pink-200 rounded-full mr-2"></i>Hire top-rated freelancers and agencies with confidence</p>
        </div>
      </div>
      <button className='bg-black text-white py-3 px-4 rounded-full max-w-60 font-semibold text-md'><i className="ri-bard-line"></i> Start Your Project Brief</button>
    </div>
  )
}

export default HeroContent
