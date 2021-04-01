import { Button, makeStyles } from '@material-ui/core'
import React from 'react'
import { Product } from '../../ProductData'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles((theme) => ({
  productContainer: {
    width: "20rem",
    height: "10rem",
    boxShadow: "0 15px 25px black",
    borderRadius: ".5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "4rem",
    position: "relative",
    padding: "1rem",
  },
  image: {
    borderRadius: "50%",
    width: "7rem",
    height: "7rem",
    position: "absolute",
    top: -45,
    left: -35,
    boxShadow: "0 15px 25px rgba(0, 0, 0, 0.5)",
  },
  title: {
    fontSize: "1.4rem",
  },
  price: {
    textAlign: "center",
    color: "#FFBD2D",
  },
  button: {
    borderRadius: '.7rem',
    position: "absolute",
    bottom: -15,
    right: -15,
    background: "#41C485",
    width: "4rem",
    height: "4rem",
    boxShadow: "0 15px 25px rgba(0, 0, 0, 0.5)",
    "&:hover": {
      background: "#0E7041",
    },
  },
  icon: {
    color: "#fff",
  },
}));

interface Props {
  product: Product;
}
const Item = (props: Props) => {

    const classes = useStyles();

    return (
      <div className={classes.productContainer}>
        <img src={props.product.image} alt="pizza" className={classes.image} />
        <h4 className={classes.title}>{props.product.title}</h4>
        <span className={classes.price}>{`${props.product.price} SEK`}</span>
        <Button size="small" variant="contained" className={classes.button}>
          {" "}
          <ShoppingCartIcon className={classes.icon} />{" "}
        </Button>
      </div>
    );
}

export default Item
