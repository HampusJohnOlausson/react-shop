import { useContext, useState } from 'react'
import { ProductContext } from '../../Contexts/ProductContext'
import ProductCard from './ProductCard';
import productListStyles from '../../Style/ProductListStyles';

const ProductList = () => {

    const classes = productListStyles();
    const productContext = useContext(ProductContext)
    const [search, setSearch] = useState('');

    let filteredProducts = productContext.products.filter((product) => {
      return product.title.toLowerCase().indexOf(search) !== -1;
    })

    return (
        <div className={classes.list}>
          <input type="text" onChange={(e) => setSearch(e.target.value)} />
          {filteredProducts.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
    );
}

export default ProductList;
