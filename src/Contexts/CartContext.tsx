import { createContext } from "react";
import { Product } from "../Data/ProductData";
import React, { Component } from "react";

interface CartItem {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  size: Array<{}>;
  category: string;
  gender: string;
}

interface State {
    cart: CartItem[],
}

interface CartContextValue extends State{
    
    addProductToCart: (product: Product) => void;
    removeProductFromCart: (product: CartItem) => void;
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

  chooseSize = (product: CartItem) => {
    console.log(product);
  };

  removeProductFromCart = (product: Product) => {
    const currentCart = [...this.state.cart];
    let cartIndex = currentCart.indexOf(product);
    currentCart.splice(cartIndex, 1);
    this.setState({
        cart: currentCart
    })
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
