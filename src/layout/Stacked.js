import React from 'react'
import Navbar from 'components/Navbar/Navbar'
import Footer from 'components/Footer/Footer'

const Stacked = (props) => {
    return (
        <>
        <Navbar /> 
            {props.children}
        <Footer/>
        </>

    )
}

export default Stacked