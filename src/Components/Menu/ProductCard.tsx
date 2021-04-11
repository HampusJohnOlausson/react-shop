import { Button } from '@material-ui/core'
import { Product } from '../../ProductData'
import { makeStyles } from '@material-ui/core'
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
      borderRadius: '50%',
      width: '7rem',
      height: '7rem',
      position: 'absolute',
      bottom: '-50',
      left: '-45',
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
const Item = (props: Props) =>{

    const classes = useStyles();

    const cartContext = useContext(CartContext);

    return (
      <div>
          <div className={classes.productContainer}>
            <img
              src={props.product.image}
              alt="pizza"
              className={classes.image}
            />
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
      </div>
    )
}

export default Item;
