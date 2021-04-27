import React, { useContext } from 'react'
import { useRouteMatch } from 'react-router';
import { ProductContext } from '../../Contexts/ProductContext';

interface Props {
  id: string
}
const ProductDetails = (props: Props) => {

  const productContext = useContext(ProductContext);
  const match = useRouteMatch<Props>();

  let specificProduct = productContext.products.find((p) => p.id === match.params.id);
  console.log(specificProduct);

  if(!specificProduct){

    return <div>
      <h1>Im Sorry the item was not available!</h1>
    </div>
  }
    return (
      <div>
        <div className="specificProductContainer">
          <img src={specificProduct?.image} alt="" />
          <h4 style={{ color: "white" }}>{specificProduct?.title}</h4>
          <span>{`${specificProduct.price} $`}</span>
          <p>{specificProduct.description}</p>
          <div className="sizeContainer">
            <h5>Size:</h5>
            <span>{specificProduct.size}</span>
          </div>
        </div>
      </div>
    );
}

export default ProductDetails;
