import React, { useContext } from 'react'
import { useRouteMatch } from 'react-router';
import { ProductContext } from '../../Contexts/ProductContext';
import { Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { CartContext } from '../../Contexts/CartContext';
import { Product } from "../../ProductData";


interface Props {
  id: string,
  product: Product;
}
const ProductDetails = (props: Props) => {

  const cartContext = useContext(CartContext);
  const productContext = useContext(ProductContext);
  const match = useRouteMatch<{
    id?: string | undefined;
    product?: string | undefined;
  }>();

  let specificProduct = productContext.products.find((p) => p.id === match.params.id);
  console.log(specificProduct);

  if(!specificProduct){

    return <div>
      <h1>Sorry, the item was not available!</h1>
    </div>
  }
    return (
      <div>
        <div className="specificProductContainer">
          <img src={specificProduct.image} alt="" />
          <h4 style={{ color: "white" }}>{specificProduct.title}</h4>
          <span>{`${specificProduct.price} $`}</span>
          <p>{specificProduct.description}</p>
          <div className="sizeContainer">
            <h5>Size:</h5>
            <span>{specificProduct.size}</span>
          </div>
          <Button
            size="small"
            variant="contained"
            onClick={() => cartContext.addProductToCart(props.product)}
          >
            {" "}
            <ShoppingCartIcon />{" "}
          </Button>
        </div>
      </div>
    );
}

export default ProductDetails;
