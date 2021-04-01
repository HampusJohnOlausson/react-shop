import { makeStyles } from '@material-ui/core'
import React from 'react'
import ItemList from './ItemList'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        textAlign: 'center',
        fontFamily: "Yellowtail, cursive",
        color: "#FFBD2D"
    }
}))

const MenuPage = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h2 className={classes.title}>Menu</h2>
            <ItemList/>
        </div>
    )
}

export default MenuPage
