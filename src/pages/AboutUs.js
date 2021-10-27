import React from 'react'
import Stacked from 'layout/Stacked'

import AboutUsHero from 'sections/Hero/AboutUsHero'
import AboutUsContent from 'sections/AboutUsContent/AboutUsContent'

const AboutUs = () => {

    return (
        <>
        <Stacked>
            <AboutUsHero/>
            <AboutUsContent />
        </Stacked>
        </>
    )
}

export default AboutUs
