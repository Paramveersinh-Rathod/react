import React from 'react'
import ProfilePicture from "../assets/profile-pic.jfif"
const NavRight = () => {
  return (
    <div className='flex items-center gap-8'>
      <div className='border-1 border-gray-200 py-2 px-6 rounded-4xl text-sm font-medium'><i className="ri-book-ai-line"></i> Start Project Brief</div>
      <i className="ri-message-3-line text-2xl font-medium"></i>
      <i class="ri-notification-4-line text-2xl font-medium"></i>
      <div className='relative'>
            <img src={ProfilePicture} alt="Profile Picture" className='w-12 h-12 rounded-full object-cover'/>
            <div className='absolute left-[33px] top-[29.5px] text-[15px] text-white'><i class="ri-circle-fill"></i></div>
            <div className='absolute left-[35px] top-8 text-xs text-green-500 '><i class="ri-circle-fill"></i></div>
      </div>
    </div>
  )
}
export default NavRight
