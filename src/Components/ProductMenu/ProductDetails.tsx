import React, { useContext, useState } from 'react'
import { useRouteMatch } from 'react-router';
import { Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { CartContext } from '../../Contexts/CartContext';
import { Product, ProductData } from "../../Data/ProductData";
import productDetailsStyles from '../../Style/ProductDetailsStyles'

interface Props {
  id: string;
  product: Product;
  size: Array<{}>;
}
const ProductDetails = (props: Props) => {

  const classes = productDetailsStyles();
  
  const cartContext = useContext(CartContext);
  const match = useRouteMatch<{id: string}>();

    let specificProduct = ProductData.find(
      (p) => p.id === match.params.id
      );
      
    const [isSize, setSize] = useState(false);
    
    const chooseSize = (size: string) => {
      if(specificProduct){
         specificProduct.size = size;
         setSize(!isSize);
      }
    } 
      
  if(!specificProduct){

    return <div>
      <h1>Sorry, the product was not available!</h1>
    </div>
  }
    return (
      <div className={classes.wrapper}>
        <div className={classes.specificProductContainer}>
          <img src={specificProduct.image} alt="" className={classes.image} />
          <div className={classes.infoContainer}>
            <h4 style={{ color: "white" }}>{specificProduct.title}</h4>
            <span>{`${specificProduct.price} $`}</span>
            <p>{specificProduct.description}</p>
            <div className="sizeContainer">
              <h5>Size:</h5>
              <div>
                <Button
                  onClick={() => chooseSize("S")}
                  className={classes.sizeBtn}
                >
                  XS
                </Button>
                <Button
                  onClick={() => chooseSize("S")}
                  className={classes.sizeBtn}
                >
                  S
                </Button>
                <Button
                  onClick={() => chooseSize("M")}
                  className={classes.sizeBtn}
                >
                  M
                </Button>
                <Button
                  onClick={() => chooseSize("L")}
                  className={classes.sizeBtn}
                >
                  L
                </Button>
                <Button
                  onClick={() => chooseSize("XL")}
                  className={classes.sizeBtn}
                >
                  XL
                </Button>
              </div>
            </div>
            {isSize ? 
              <Button
                className={classes.activeBtn}
                onClick={() => cartContext.addProductToCart(specificProduct!)}
              >
                Add To Cart{" "}
                <ShoppingCartIcon />{" "}
              </Button>
             : 
            <Button className={classes.nonActiveBtn}>Choose Size</Button>
            }
          </div>
        </div>
      </div>
    );
}

export default ProductDetails;
