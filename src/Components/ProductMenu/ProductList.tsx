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
      <div>
        <div className={classes.inputContainer}>
          <input className={classes.input} placeholder="Search for a product..." type="text" onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div className={classes.list}>
          {filteredProducts.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
}

export default ProductList;
