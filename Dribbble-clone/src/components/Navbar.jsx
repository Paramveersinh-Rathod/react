import React from 'react'
import NavLeft from './NavLeft'
import NavRight from './NavRight'
const Navbar = () => {
  //  
  return (
    <div className='pt-3 h-20 flex gap-40 justify-between items-center px-10'>
      <NavLeft />
      <NavRight />
    </div>
  )
}

export default Navbar
