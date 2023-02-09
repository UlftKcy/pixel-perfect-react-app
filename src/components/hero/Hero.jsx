import React from 'react'
import LeftSection from './LeftSection'
import Mockups from './Mockups'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className='h-[51rem]'>
      <Navbar />
      <div className='flex items-center'>
        <LeftSection />
        <Mockups />
      </div>
    </div>
  )
}

export default Hero