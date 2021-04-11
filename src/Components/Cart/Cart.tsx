import { useContext} from "react";
import { CartContext } from "../../Contexts/CartContext";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  productContainer: {
    padding: '2rem 1rem',
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    justifyContent: "space-around",
    margin: "1rem auto",
    boxShadow: "0 15px 25px rgba(0, 0, 0, 0.5)",
  },
  image: {
    borderRadius: "50%",
    width: "7rem",
    height: "7rem",
  },
  title: {
    fontSize: "1.4rem",
  },
  price: {
    fontSize: "2rem",
  },
  quantityConatainer: {},
  empty: {
    textAlign: 'center'
  },
}));

const Cart = () => {

  const classes = useStyles();
  
  const cartContext = useContext(CartContext);

    if(cartContext.cart.length === 0){
        return (
        <div className={classes.empty}>
            <h2>Cart is empty</h2>
        </div>
        )
    }

    return (
      <div className={classes.root}>
        {cartContext.cart.map((item) => (
          <div key={item.id} className={classes.productContainer}>
              <img src={item.image} alt="" className={classes.image}/>
              <h4 className={classes.title}>{item.title}</h4>
              <p className={classes.price}>{`${item.price} sek`}</p>
              <div className={classes.quantityConatainer}>

              </div>
          </div>
        ))}
      </div>
    )
}

export default Cart;
