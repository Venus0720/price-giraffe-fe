import React from 'react'
import Stacked from 'layout/Stacked'

import HomeHero from 'sections/Hero/HomeHero'
import PopularProducts from 'sections/Products/PopularProducts'

const Home = () => {
  return (
    <Stacked>
      <HomeHero />
      <PopularProducts />
    </Stacked>
  )
}

export default Home
