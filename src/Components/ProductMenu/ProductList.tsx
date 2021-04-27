import { makeStyles } from '@material-ui/core';
import { useContext } from 'react'
import { ProductContext } from '../../Contexts/ProductContext'
import ProductCard from './ProductCard';

const useStyles = makeStyles((theme) => ({

    list: {
        padding: '4rem 2rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    
}))

const ProductList = () => {

    const classes = useStyles();

    const productContext = useContext(ProductContext)

    return (
        <div className={classes.list}>
          {productContext.products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
    );
}

export default ProductList;
