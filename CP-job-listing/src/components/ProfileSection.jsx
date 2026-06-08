import React from 'react'
import ProfilePicture from '../assets/profilePic.jpg'
const ProfileSection = () => {
  return (
    <div className='ProfileSection'>
      <img src={ProfilePicture} alt="" />
      <div>
        <h3>@paramveer77dev</h3>
        <p>update your profile</p>
      </div>
    </div>
  )
}

export default ProfileSection
