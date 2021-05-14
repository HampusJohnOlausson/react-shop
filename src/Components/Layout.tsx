import React from 'react'
import Main from './Main'
import Navbar from './Navbar'
import layoutStyles from '../Style/LayoutStyles'

const Layout = () => {

    const classes = layoutStyles();

    return (
        <div className={classes.root}>
            <Navbar/>
            <Main/>
        </div>
    )
}

export default Layout
