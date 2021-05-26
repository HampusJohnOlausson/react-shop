import React from 'react'
import ProductList from './ProductList';
import productPageStyles from '../../Style/ProductPageStyles'

const ProductPage = () => {

    const classes = productPageStyles();

    return (
        <div className={classes.root}>
            <h2 className={classes.title}>Products</h2>
            <ProductList/>
        </div>
    )
}

export default ProductPage;
