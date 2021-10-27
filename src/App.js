import React from 'react'

import { Switch, Route } from 'react-router-dom'

import LandingPage from 'pages/LandingPage'
import AboutUs from 'pages/AboutUs'
import FAQ from 'pages/FAQ'
import PrivacyPolicy from 'pages/PrivacyPolicy'

const App = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/about" component={AboutUs} />
                <Route exact path="/faq" component={FAQ} />
                <Route exact path="/privacy" component={PrivacyPolicy} />
            </Switch>
        </>
    )
}

export default App