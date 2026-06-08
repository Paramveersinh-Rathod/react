import React from 'react'
import JobList from './components/JobList'
import Header from './components/Header'
const jobCards = [
  {
    name: "Amazon",
    location: "California, USA",
    designation: "Software Developer",
    lowestSalary: "8,000",
    highestSalary: "20,000",
    experience: "1",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png"
  },
  {
    name: "Google",
    location: "California, USA",
    designation: "Frontend Developer",
    lowestSalary: "10,000",
    highestSalary: "25,000",
    experience: "2",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
  },
  {
    name: "Microsoft",
    location: "Washington, USA",
    designation: "Backend Developer",
    lowestSalary: "9,000",
    highestSalary: "22,000",
    experience: "3",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
  },
  {
    name: "Meta",
    location: "California, USA",
    designation: "React Developer",
    lowestSalary: "11,000",
    highestSalary: "26,000",
    experience: "2",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png"
  },
  {
    name: "Netflix",
    location: "Los Angeles, USA",
    designation: "UI Developer",
    lowestSalary: "12,000",
    highestSalary: "28,000",
    experience: "4",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
  },
  {
    name: "Apple",
    location: "California, USA",
    designation: "iOS Developer",
    lowestSalary: "13,000",
    highestSalary: "30,000",
    experience: "3",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
  },
  {
    name: "Adobe",
    location: "Texas, USA",
    designation: "Full Stack Developer",
    lowestSalary: "9,500",
    highestSalary: "21,000",
    experience: "2",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png"
  },
  {
    name: "Spotify",
    location: "Stockholm, Sweden",
    designation: "JavaScript Developer",
    lowestSalary: "8,500",
    highestSalary: "19,000",
    experience: "1",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
  },
  {
    name: "Uber",
    location: "New York, USA",
    designation: "Node.js Developer",
    lowestSalary: "10,500",
    highestSalary: "24,000",
    experience: "3",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
  },
  {
    name: "Airbnb",
    location: "San Francisco, USA",
    designation: "MERN Stack Developer",
    lowestSalary: "9,000",
    highestSalary: "23,000",
    experience: "2",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg"
  },
  {
    name: "Tesla",
    location: "Texas, USA",
    designation: "Software Engineer",
    lowestSalary: "12,000",
    highestSalary: "29,000",
    experience: "5",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg"
  },
  {
    name: "LinkedIn",
    location: "California, USA",
    designation: "Web Developer",
    lowestSalary: "8,000",
    highestSalary: "18,000",
    experience: "1",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
  },
  {
    name: "Intel",
    location: "Arizona, USA",
    designation: "Cloud Engineer",
    lowestSalary: "11,000",
    highestSalary: "27,000",
    experience: "4",
    imageUrl: "data:image/png;base64,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"
  },
  {
    name: "IBM",
    location: "New York, USA",
    designation: "DevOps Engineer",
    lowestSalary: "10,000",
    highestSalary: "20,000",
    experience: "3",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
  },
  {
    name: "Oracle",
    location: "Texas, USA",
    designation: "Python Developer",
    lowestSalary: "9,500",
    highestSalary: "22,500",
    experience: "2",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg"
  }
];
const App = () => {
  return (
    <div>
      <Header />
      <JobList jobCards = {jobCards} />
    </div>
  )
}

export default App
