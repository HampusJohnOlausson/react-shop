import { Button } from '@material-ui/core'
import { Product } from '../../ProductData'
import { makeStyles } from '@material-ui/core'
import { Link } from "react-router-dom";
import React, { useContext } from 'react'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { CartContext } from '../../Contexts/CartContext';

const useStyles = makeStyles((theme) => ({
    productContainer: {
      width: '20rem',
      height: '10rem',
      boxShadow: '0 15px 25px #000000',
      borderRadius: '.5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '4rem',
      padding: '1rem',
    },
    image: {

      width: '7rem',
      height: '7rem',
      boxShadow: '0 15px 25px rgba(0, 0, 0, 0.5)'
  },
  title: {
      fontSize: '1.4rem',
  },
  price: {
      textAlign: 'center',
      color: '#FFBD2D',
  },
  button: {
    borderRadius: '.7rem',
    bottom: '-20',
    position: 'absolute',
    background: '#41C485',
    width: '4rem',
    height: '4rem',
    boxShadow: '0 15px 25px rgba(0, 0, 0, 0.5)',
    // &:hover{
    // background: #0E7041;
    // }
  },
  icon: {
    color: '#fff',
    },
  link: {
    textDecoration: 'none',
  },
}))

interface Props {
  product: Product;
}
const ProductCard = (props: Props) =>{

    const classes = useStyles();

    const cartContext = useContext(CartContext);

    return (
      <div>
        <Link to={`/productItem/${props.product.id}`} key={props.product.id}>
          <div className={classes.productContainer}>
            <img src={props.product.image} alt="" className={classes.image} />
            <h4 className={classes.title}>{props.product.title}</h4>
            <span
              className={classes.price}
            >{`${props.product.price} SEK`}</span>
            <Button
              size="small"
              variant="contained"
              className={classes.button}
              onClick={() => cartContext.addProductToCart(props.product)}
            >
              {" "}
              <ShoppingCartIcon className={classes.icon} />{" "}
            </Button>
          </div>
        </Link>
      </div>
    );
}

export default ProductCard;
