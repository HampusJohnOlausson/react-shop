import { useContext} from "react";
import { CartContext } from "../../Contexts/CartContext";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({

  root: {

  },
  empty: {

  },


}))

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
      <div>
        {cartContext.cart.map((item) => (
          <div key={item.id} className="product-Container">
              <img src={item.image} alt="" className="cart-image"/>
              <h4>{item.title}</h4>
              <p>{item.price}</p>
          </div>
        ))}
      </div>
    )
}

export default Cart;
