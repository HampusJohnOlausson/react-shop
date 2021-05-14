import { useContext } from 'react'
import { ProductContext } from '../../Contexts/ProductContext'
import ProductCard from './ProductCard';
import productListStyles from '../../Style/ProductListStyles';

const ProductList = () => {

    const classes = productListStyles();

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
