import React from 'react'
import JobCard from './JobCard'

const JobList = (props) => {
  let jobCards = props.jobCards;
  return (
    <div className='JobList'>
      {jobCards.map(function(card, idx) {
        return <JobCard key={idx} props = {card}/>
      })}
    </div>
  )
}

export default JobList
