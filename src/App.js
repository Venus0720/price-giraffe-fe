import React from 'react'

import Navbar from 'components/Navbar/Navbar'
import LandingPageHero from 'sections/Hero/LandingPageHero'
import LandingPageFeatures from 'sections/LandingPageFeatures/LandingPageFeatures'
import LandingPageGraph from 'sections/LandingPageGraph/LandingPageGraph'
import LandingPageCTA from 'components/CTA/LandingPageCTA'
import Footer from 'components/Footer/Footer'

const App = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <LandingPageHero />
            </div>
            <div className="pt-20">
                <LandingPageFeatures />
            </div>
            <div className="">
                <LandingPageGraph />
            </div>
            <div>
                <LandingPageCTA />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default App