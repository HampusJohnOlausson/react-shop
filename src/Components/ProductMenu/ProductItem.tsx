import React, { useContext } from 'react'
import { useRouteMatch } from 'react-router';
import { ProductContext } from '../../Contexts/ProductContext'
import { Product } from '../../ProductData';

const ProductItem = () => {

    // const matchId = useRouteMatch<{ id: number }>();
    const productContext = useContext(ProductContext);

    // let getSpecificProduct = productContext.products.find((product) => product.title === matchId.params.id);
    return (
      <div>
        <div className="specificProductContainer">{
        }</div>
      </div>
    );
}

export default ProductItem
