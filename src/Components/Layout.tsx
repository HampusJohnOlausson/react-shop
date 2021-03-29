import { makeStyles } from '@material-ui/core'
import React from 'react'
import Main from './Main'
import Navbar from './Navbar'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "#1D1C1C",
    width: "100%",
    color: "#fff",
  },
}));

const Layout = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Navbar/>
            <Main/>
        </div>
    )
}

export default Layout
