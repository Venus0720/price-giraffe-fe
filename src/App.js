import React, { useEffect } from 'react'

import { Switch, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import LandingPage from 'pages/LandingPage'
import AboutUs from 'pages/AboutUs'
import FAQ from 'pages/FAQ'
import PrivacyPolicy from 'pages/PrivacyPolicy'
import Terms from 'pages/Terms'
import NoPageFound from 'pages/NoPageFound'
import Features from 'pages/Features'
import Home from 'pages/Home'
import Search from 'pages/Search'
import Category from 'pages/Category'
import Profile from 'pages/Profile'

import { getCurrentUser } from 'reducers/userReducer'

const App = () => {
  const dispatch = useDispatch()
  // const user = useSelector((state) => state.user || null)
  const user = {}

  useEffect(() => {
    if (localStorage.getItem('token')) {
      console.log('getting current user')
      try {
        dispatch(getCurrentUser())
      } catch (err) {
        console.log(err)
      }
    }
  }, [dispatch])

  return (
    <>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={AboutUs} />
        <Route path="/faq" component={FAQ} />
        <Route path="/privacy" component={PrivacyPolicy} />
        <Route path="/terms" component={Terms} />
        <Route path="/features" component={Features} />
        <Route path="/coming-soon" component={Home} />
        {user && <Route path="/profile" component={Profile} />}
        <Route exact path="/search" component={Search} />
        <Route exact path="/categories/:categoryId" component={Category} />
        <Route component={NoPageFound} />
      </Switch>
    </>
  )
}

export default App
