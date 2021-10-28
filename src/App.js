import React from 'react'

import { Switch, Route } from 'react-router-dom'

import LandingPage from 'pages/LandingPage'
import AboutUs from 'pages/AboutUs'
import FAQ from 'pages/FAQ'
import PrivacyPolicy from 'pages/PrivacyPolicy'
import Terms from 'pages/Terms'
import NoPageFound from 'pages/NoPageFound'


const App = () => {

    return (
        <>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/about" component={AboutUs} />
                <Route path="/faq" component={FAQ} />
                <Route path="/privacy" component={PrivacyPolicy} />
                <Route path="/terms" component={Terms} />
                <Route component={NoPageFound}/>
            </Switch>
        </>
    )
}

export default App