import React from 'react'
import Cart from './Cart'
import Forms from './Forms';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
      textAlign: 'center',
  }
 
}));

const Checkout = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1 className={classes.title}>Checkout</h1>
            <Cart/>
            <Forms/>
        </div>
    )
}

export default Checkout
