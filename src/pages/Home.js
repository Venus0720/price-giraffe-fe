import React from 'react'
import Stacked from 'layout/Stacked'

import HomeHero from 'sections/Hero/HomeHero'
import Overlay from 'components/Overlay/Overlay'

const Home = () => {
  return (
    <Stacked>
      <Overlay />
      <HomeHero />
    </Stacked>
  )
}

export default Home
