import React from 'react'
import Cart from './Cart'
import Forms from './Forms/Forms';
import checkoutStyles from '../../Style/CheckoutStyles';

const Checkout = () => {

    const classes = checkoutStyles();

    return (
        <div className={classes.root}>
            <h1 className={classes.title}>Checkout</h1>
            <Cart/>
            <Forms/>
        </div>
    )
}

export default Checkout
