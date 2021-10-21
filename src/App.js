import React from 'react'

import Navbar from 'components/Navbar/Navbar'
import LandingPageHero from 'sections/Hero/LandingPageHero'
import LandingPageFeatures from 'sections/LandingPageFeatures/LandingPageFeatures'
import LandingPageGraph from 'sections/LandingPageGraph/LandingPageGraph'
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
            <div className="pt-20">
                <LandingPageGraph />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default App