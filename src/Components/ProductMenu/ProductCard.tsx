import { Button } from '@material-ui/core'
import { Product } from '../../ProductData'
import { makeStyles } from '@material-ui/core'
import { Link } from "react-router-dom";
import React, { useContext } from 'react'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { CartContext } from '../../Contexts/CartContext';

const useStyles = makeStyles((theme) => ({
  productContainer: {
    width: "15rem",
    height: "30rem",
    boxShadow: "0 15px 25px #000000",
    borderRadius: ".5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "4rem",
    padding: "1rem",
  },
  image: {
    borderRadius: ".5rem .5rem 0rem 0rem",
    width: "15rem",
    height: '25rem',
    boxShadow: "0 15px 25px rgba(0, 0, 0, 0.5)",
  },
  title: {
    fontSize: "1.4rem",
    color: "white",
    margin: '.7rem 0rem'
  },
  price: {
    textAlign: "center",
    color: "#28c7fa",
    fontSize: '1.2rem',
  },
  button: {
    borderRadius: ".7rem",
    bottom: "-20",
    position: "absolute",
    background: "#41C485",
    width: "4rem",
    height: "4rem",
    boxShadow: "0 15px 25px rgba(0, 0, 0, 0.5)",
    // &:hover{
    // background: #0E7041;
    // }
  },
  icon: {
    color: "#fff",
  },
  link: {
    textDecoration: "none",
  },
}));

interface Props {
  product: Product;
}
const ProductCard = (props: Props) =>{

    const classes = useStyles();

    const cartContext = useContext(CartContext);

    return (
      <div>
        <Link to={`/productItem/${props.product.id}`} key={props.product.id} className={classes.link}>
          <div className={classes.productContainer}>
            <img src={props.product.image} alt="" className={classes.image} />
            <h4 className={classes.title}>{props.product.title}</h4>
            <span
              className={classes.price}
            >{`${props.product.price} SEK`}</span>
            {/* <Button
              size="small"
              variant="contained"
              className={classes.button}
              onClick={() => cartContext.addProductToCart(props.product)}
            >
              {" "}
              <ShoppingCartIcon className={classes.icon} />{" "}
            </Button> */}
          </div>
        </Link>
      </div>
    );
}

export default ProductCard;
