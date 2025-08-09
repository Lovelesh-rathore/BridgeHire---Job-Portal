import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import UploadCV from '../components/UploadCV'
import FeaturedJob from '../components/FeaturedJob'
import Working from '../components/Working'
import Testimonial from '../components/Testimonial'

const Home = () => {
  return (
    <>
        <Hero/>
        <Services/>
        <UploadCV/>
        {/* <FeaturedJob/>
        <Working/>
        <Testimonial/> */}
    </>
  )
}

export default Home