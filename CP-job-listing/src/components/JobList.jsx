import React from 'react'
import JobCard from './JobCard'

const JobList = (props) => {
  let jobCards = props.jobCards;
  console.log(jobCards)
  return (
    <div className='JobList'>
      {jobCards.map(function(card) {
        return <JobCard props = {card}/>
      })};
    </div>
  )
}

export default JobList
