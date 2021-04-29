import { createContext } from "react";
import { Product } from "../ProductData";
import React, { Component } from "react";
import Cart from "../Components/Cart/Cart";

interface State {
    cart: Product[],
}

interface CartContextValue extends State{
    
    addProductToCart: (product: Product) => void;
    removeProductFromCart: (product: Product) => void;
    chooseSize: (product: any) => void;
    emptyCart: () => void;
    getTotal: () => void;
    
}

export const CartContext = createContext<CartContextValue>({
  addProductToCart: () => {},
  chooseSize: () => {},
  removeProductFromCart: () => {},
  emptyCart: () => {},
  getTotal: () => {},
  cart: [],
});

class CartProvider extends Component<{}, State> {
  state: State = {
    cart: [],
  };

  emptyCart = () => {
    this.setState({
      cart: [],
    });
  };

  addProductToCart = (product: Product) => {
    const updateCart = [...this.state.cart, product];
    this.setState({
      cart: updateCart,
    });
  };

  chooseSize = (product: Product) => {
    for (let i = 0; i < product.size.length; i++) {
      const chosenSize = product.size[i];
      console.log(chosenSize);
    }
  };

  removeProductFromCart = () => {
    // const updateCart = [...this.state.cart];
    // this.setState({
    //     cart:
    // })
  };

  getTotal = () => {};

  render() {
    console.log(this.state.cart);
    return (
      <CartContext.Provider
        value={{
          cart: this.state.cart,
          emptyCart: this.emptyCart,
          addProductToCart: this.addProductToCart,
          chooseSize: this.chooseSize,
          removeProductFromCart: this.removeProductFromCart,
          getTotal: this.getTotal,
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export default CartProvider;
