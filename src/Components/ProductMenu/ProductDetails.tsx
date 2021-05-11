import React, { useContext, useState } from 'react'
import { useRouteMatch } from 'react-router';
import { Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { CartContext } from '../../Contexts/CartContext';
import { Product, ProductData } from "../../Data/ProductData";
import { makeStyles } from '@material-ui/core'

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
  activeBtn: {
    width: "13rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "2rem",
    padding: "1rem",
    borderRadius: ".4rem",
    background: "#13D79B",
    boxShadow: "0 15px 25px rgba(0, 0, 0, 0.5)",
    color: "white",
    fontSize: "1.2rem",
    fontWeight: "bold",
    "&:hover": {
      background: "#18B988",
    },
  },
  nonActiveBtn: {
    width: "13rem",
    margin: "2rem",
    padding: "1rem",
    boxShadow: "0 15px 25px rgba(0, 0, 0, 0.5)",
    borderRadius: ".4rem",
    background: "grey",
    color: "white",
    fontSize: "1.2rem",
    fontWeight: "bold",
    "&:hover": {
      background: "grey",
    },
  },
}));

interface Props {
  id: string;
  product: Product;
  size: Array<{}>;
}
const ProductDetails = (props: Props) => {

  const classes = useStyles();
  
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
