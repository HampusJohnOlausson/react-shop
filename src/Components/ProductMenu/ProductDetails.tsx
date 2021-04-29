import React, { useContext } from 'react'
import { useRouteMatch } from 'react-router';
import { ProductContext } from '../../Contexts/ProductContext';
import { Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { CartContext } from '../../Contexts/CartContext';
import { Product } from "../../ProductData";
import { makeStyles } from '@material-ui/core'
import ProductList from './ProductList';


const useStyles = makeStyles((theme) => ({
  wrapper: {
    minHeight: "85vh",
  },
  specificProductContainer: {
    height: "45rem",
    width: "80%",
    display: "flex",
    flexDirection: "row",
    margin: "auto",
  },
  image: {
    width: "50%",
  },
  infoContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  sizeBtn: {
    margin: ".5rem",
    padding: "1rem",
    borderRadius: ".4rem",
    background: "#28c7fa",
    boxShadow: "0 15px 25px rgba(0, 0, 0, 0.5)",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      background: "#20A5CF",
    },
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
              <div>
                {specificProduct.size.map((s) => (
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => cartContext.chooseSize(specificProduct!)}
                    className={classes.sizeBtn}
                  >
                    {s}
                  </Button>
                ))}
              </div>
            </div>
            <Button
              size="small"
              variant="contained"
              onClick={() => cartContext.addProductToCart(specificProduct!)}
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
