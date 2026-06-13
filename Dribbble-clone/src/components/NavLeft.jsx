import React from 'react'
import DribbbleLogo from '../assets/dribbble-logo.png'
const NavLeft = () => {
    const dropdownClasses = "absolute bg-white mt-6 py-4 px-6 rounded-lg shadow-lg min-w-48 w-max -translate-y-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible left-[-11px] transition-all duration-300 group-hover:translate-y-0"
  return (
    <div className="nav-left w-2/5 flex justify-between items-center">
        <img src={DribbbleLogo} alt="" className='h-6 pr-6'/>
        <div className="font-medium relative group">
          <span className='cursor-pointer p-0 group-hover:opacity-50'>Explore<i className="ri-arrow-down-s-line"></i></span>
          <div className={dropdownClasses}>            
            <div className='flex flex-col gap-3 justify-between'>
              <div className='border-b border-gray-200 py-3 flex flex-col gap-2'>
                <div><i className="ri-user-follow-line"></i> Following</div>
                <div><i className="ri-fire-line"></i> Popular</div>
                <div><i className="ri-bard-line"></i> New and Noteworthy</div>
              </div>
              <div className='py-3 text-sm flex flex-col gap-2 text-gray-700 font-normal'>
                <div>Product Design</div>
                <div>Web Design</div>
                <div>Animation</div>
                <div>Branding</div>
                <div>Illustration</div>
                <div>Mobile</div>
                <div>Typography</div>
                <div>Print</div>
              </div>
            </div>
          </div>
        </div>
        <div className="font-medium relative group">
          <span className='cursor-pointer p-0 group-hover:opacity-50'>Hire Talent<i className="ri-arrow-down-s-line"></i></span>
          <div className={dropdownClasses}>            
            <div className='border-b border-gray-200 py-3 flex gap-15 justify-between'>
              <div className='flex flex-col gap-1'>
                <div><i className="ri-book-ai-line"></i> Start Project Brief</div>
                <p className='pl-5 pb-3 text-sm text-gray-700 font-normal'>Get recommendations and proposals</p>
                <div><i className="ri-group-line"></i> Browse Profiles</div>
                <p className='pl-5 pb-3 text-sm text-gray-700 font-normal'>Find and message talent directly</p>
                <div><i className="ri-price-tag-3-line"></i> Explore Services</div>
                <p className='pl-5 pb-3 text-sm text-gray-700 font-normal'>hire quickly with pre-packaged services</p>
              </div>
              <div className='flex flex-col gap-3'>
                  <div>Browse Design Agencies <i className="ri-arrow-right-long-line"></i></div>
                  <div>Post a Full-Time Job <i className="ri-arrow-right-long-line"></i></div>
              </div>
            </div> 
            <div>
              <p className='pt-3 text-sm flex gap-2 items-center text-gray-700 font-normal'>
                <i className="ri-book-open-line"></i> <span className='pb-1'> Learn more about how hiring works on Dribbble </span> <i className="ri-arrow-right-long-line"></i>
              </p>
            </div> 
          </div>
        </div>
        <div className="font-medium relative group">
          <span className='cursor-pointer p-0 group-hover:opacity-50'>Get Hired<i className="ri-arrow-down-s-line"></i></span>
          <div className={dropdownClasses}>            
            <div className='border-b border-gray-200 py-3 flex gap-15 justify-between'>
              <div className='flex flex-col gap-1'>
                <div><i className="ri-file-list-2-line"></i> Browse Project Brief</div>
                <p className='pl-5 pb-3 text-sm text-gray-700 font-normal'>Pitch clients ready to hire now</p>
                <div><i className="ri-briefcase-2-line"></i> Send Outbound Proposal</div>
                <p className='pl-5 pb-3 text-sm text-gray-700 font-normal'>Send proposals to any client</p>
                <div><i className="ri-apps-2-add-line"></i> Add Services</div>
                <p className='pl-5 pb-3 text-sm text-gray-700 font-normal'>Let clients purchase your services</p>
              </div>
              <div className='flex flex-col gap-3'>
                  <div>Full-Time Jobs <i className="ri-arrow-right-long-line"></i></div>
                  <div>Upgrade to Pro <i className="ri-arrow-right-long-line"></i></div>
                  <div>Advertise with Us <i className="ri-arrow-right-long-line"></i></div>
              </div>
            </div> 
            <div>
              <p className='pt-3 text-sm flex gap-2 items-center text-gray-700 font-normal'>
                <i className="ri-book-open-line"></i> <span className='pb-1'> Learn more about getting hired works on Dribbble </span> <i className="ri-arrow-right-long-line"></i>
              </p>
            </div> 
          </div>
        </div>
        <div className="font-medium relative group">
          <span className='cursor-pointer p-0 group-hover:opacity-50'>Community<i className="ri-arrow-down-s-line"></i></span>
          <div className={dropdownClasses}>            
            <div className='flex flex-col gap-1 border-b border-gray-200'>
              <div><i className="ri-file-list-2-line"></i> Blog</div>
              <p className='pl-5 pb-3 text-sm text-gray-700 font-normal'>Design inspiration, stories, and tips</p>
              <div><i className="ri-briefcase-2-line"></i> Playoffs</div>
              <p className='pl-5 pb-3 text-sm text-gray-700 font-normal'>Join creative challenges and show your skils</p>
              <div><i className="ri-apps-2-add-line"></i> Help Center</div>
              <p className='pl-5 pb-3 text-sm text-gray-700 font-normal'>Get quick answers and learn how to use Dribbble</p>
            </div>
            <div>
              <p className='pt-3  flex gap-3 items-center text-lg'>
               <span className='pb-1 pr-3 text-sm text-gray-700 font-normal'> Follow Us </span><i className="ri-instagram-line"></i> <i className="ri-twitter-x-fill"></i> <i className="ri-pinterest-fill"></i> <i className="ri-youtube-fill"></i> <i className="ri-tiktok-fill"></i> <i className="ri-threads-line"></i> 
              </p>
            </div> 
          </div>
        </div>
      </div>
  )
}

export default NavLeft
