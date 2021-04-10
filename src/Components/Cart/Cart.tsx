import { Component, ContextType } from "react";
import { CartContext } from "../../Contexts/CartContext";

interface Props {}

class Cart extends Component<Props> {
  context!: ContextType<typeof CartContext>;
  static contextType = CartContext;

  render() {

    const { cart } = this.context;

    if(cart.length === 0){
        return (
        <div className="empty-cart">
            <h2>Cart is empty</h2>
        </div>
        )
    }

    return (
      <div>
        {cart.map((item, index) => (
          <div key={index} className="product-Container">
              <img src={item.image} alt="" className="cart-image"/>
              <h4>{item.title}</h4>
              <p>{item.price}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Cart;
