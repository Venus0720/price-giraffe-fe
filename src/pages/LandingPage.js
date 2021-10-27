import React, { useLayoutEffect } from 'react'
import Stacked from 'layout/Stacked'

import Banner from 'components/Banner/Banner'
import LandingPageHero from 'sections/Hero/LandingPageHero'
import LandingPageFeatures from 'sections/LandingPageFeatures/LandingPageFeatures'
import LandingPageGraph from 'sections/LandingPageGraph/LandingPageGraph'
import LandingPageCTA from 'components/CTA/LandingPageCTA'


const LandingPage = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <>
            <Stacked>
                <LandingPageHero />
                <LandingPageFeatures />
                <LandingPageGraph />
                <LandingPageCTA />
            </Stacked>
        </>
    )

}

export default LandingPage