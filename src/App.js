import React, {useEffect} from 'react'

import { Switch, Route, useLocation} from 'react-router-dom'

import LandingPage from 'pages/LandingPage'
import AboutUs from 'pages/AboutUs'
import FAQ from 'pages/FAQ'
import PrivacyPolicy from 'pages/PrivacyPolicy'
import Terms from 'pages/Terms'
import NoPageFound from 'pages/NoPageFound'
import Features from 'pages/Features'


const App = () => {
    const location = useLocation()

    useEffect(() => {
        console.log("location changed")
    }, [location])

    return (
        <>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/about" component={AboutUs} />
                <Route path="/faq" component={FAQ} />
                <Route path="/privacy" component={PrivacyPolicy} />
                <Route path="/terms" component={Terms} />
                <Route path="/features" component={Features}/>
                <Route component={NoPageFound}/>
            </Switch>
        </>
    )
}

export default App