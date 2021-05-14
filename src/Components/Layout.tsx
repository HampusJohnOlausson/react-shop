import React from 'react'
import Main from './Main'
import Navbar from './Navbar'
import startStyles from '../Components/StartStyle'

const Layout = () => {

    const classes = startStyles();

    return (
        <div className={classes.root}>
            <Navbar/>
            <Main/>
        </div>
    )
}

export default Layout
