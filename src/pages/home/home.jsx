import React from 'react'
import Carousal from '../../components/hero-section/carousal'
import MidBanner from '../../components/midbinner/midbinner'
import Features from '../../components/feature/feature'


function Home() {
  return (
    <>
      <Carousal />
      <MidBanner/>
      <Features />
    </>
  )
}

export default Home