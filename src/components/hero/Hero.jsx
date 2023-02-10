import React, { Fragment } from 'react'
import LeftSection from './LeftSection'
import Mockups from './Mockups'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <Fragment>
      <Navbar />
      <div className='grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 items-center'>
        <LeftSection />
        <Mockups />
      </div>
    </Fragment>
  )
}

export default Hero