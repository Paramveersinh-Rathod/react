import React from 'react'
import locationPin from '../assets/locationPin.svg'
const JobCard = (props) => {
  let CardInfo = props.props;

  return (
    <div className='JobCard'>
        <div className="JobCardCompany">
          <img id='companyLogo' src={CardInfo.imageUrl} alt="" />
          <div>
            <h3>{CardInfo.name}</h3>
            <p className='companyLocation'><img src={locationPin} alt="pin"/>{CardInfo.location}</p>
          </div>
        </div>
        <div className="JobCardDesignation">
          <h3>{CardInfo.designation}</h3>
          <p>${CardInfo.lowestSalary} - ${CardInfo.highestSalary}<br />{CardInfo.experience} Years Experience</p>
        </div>          
    </div>
  )
}

export default JobCard
