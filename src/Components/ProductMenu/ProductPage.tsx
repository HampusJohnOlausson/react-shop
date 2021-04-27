import { makeStyles } from '@material-ui/core'
import React from 'react'
import ProductList from './ProductList';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        textAlign: 'center',
        fontFamily: "Yellowtail, cursive",
        color: "#FFBD2D",
        fontSize: '2.6rem',
    }
}))

const ProductPage = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h2 className={classes.title}>Products</h2>
            <ProductList/>
        </div>
    )
}

export default ProductPage;
