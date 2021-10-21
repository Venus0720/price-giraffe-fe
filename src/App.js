import React from 'react'

import Navbar from 'components/Navbar/Navbar'
import LandingPageHero from 'sections/Hero/LandingPageHero' 
import LogoCloud from 'components/LogoCloud/LogoCloud'
import LandingPageFeatures from 'sections/LandingPageFeatures/LandingPageFeatures'

const App = () => {
    return (
        <div>
            <Navbar />
            <LandingPageHero/>
            <LandingPageFeatures />
        </div>
    )
}

export default App