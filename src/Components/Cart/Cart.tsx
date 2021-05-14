import { useContext} from "react";
import { CartContext } from "../../Contexts/CartContext";
import { Button, ButtonGroup } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import cartStyles from '../../Style/CartStyles';

const Cart = () => {

  const classes = cartStyles();
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
            <img src={item.image} alt="" className={classes.image} />
            <span>{item.size}</span>
            <h4 className={classes.title}>{item.title}</h4>
            <p className={classes.price}>{`${item.price} sek`}</p>
            <div className={classes.quantityConatainer}></div>
            <ButtonGroup color="primary">
              <Button onClick={() => cartContext.increament(item.id)}>+</Button>
              <Button>{item.quantity}</Button>
              <Button onClick={() => cartContext.decrease(item.id)}>-</Button>
            </ButtonGroup>
            <Button
              color="secondary"
              size="small"
              variant="contained"
              onClick={() => cartContext.removeProductFromCart(item.id!)}
            >
              <DeleteIcon />
            </Button>
          </div>
        ))}
        <div className="totalContainer">
          <h4 className={classes.total}>Total: <span>{cartContext.total}</span> $</h4>
        </div>
      </div>
    );
}

export default Cart;
