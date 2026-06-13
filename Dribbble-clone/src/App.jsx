import React from 'react'
import Herosection from './components/Herosection'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'

const App = () => {
  return (
    <div className='min-h-screen bg-[#FAFAFA]'>
      <Navbar />
      <Herosection />
      <MainContent />
    </div>
  )
}

export default App
