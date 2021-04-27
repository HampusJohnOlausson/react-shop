import React, { useContext } from 'react'
import { useRouteMatch } from 'react-router';
import { ProductContext } from '../../Contexts/ProductContext';
import { Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { CartContext } from '../../Contexts/CartContext';
import { Product } from "../../ProductData";
import { makeStyles } from '@material-ui/core'
import { Height } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  wrapper: {
    minHeight: '85vh',
  },
  specificProductContainer: {
    height: "45rem",
    width: "80%",
    display: "flex",
    flexDirection: "row",
    margin: "auto",
  },
  image: {
    width: '50%'
  },
  infoContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

interface Props {
  id: string,
  product: Product;
}
const ProductDetails = (props: Props) => {

  const classes = useStyles();
  

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
      </div>
    );
}

export default ProductDetails;
