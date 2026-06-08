import React from 'react'
import SearchBar from './SearchBar'
import ProfileSection from './ProfileSection'
import logo from "../assets/hiringLogo.jpg";
const Header = () => {
  return (
    <div className='Header'>
        <img src={logo} alt="logo" />
        <SearchBar />
        <ProfileSection />
    </div>
  )
}

export default Header
