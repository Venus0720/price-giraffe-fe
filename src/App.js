import React from 'react'

import {Switch, Route} from 'react-router-dom'

import LandingPage from 'pages/LandingPage'
import AboutUs from 'pages/AboutUs'

const App = () => {
    return (
        <>
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/about" component={AboutUs}/>
        </Switch>
        </>
    )
}

export default App