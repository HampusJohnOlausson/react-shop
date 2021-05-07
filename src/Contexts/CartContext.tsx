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
  quantity: number;
}


interface State {
  cart: CartItem[];
  quantity: Number;
  total: Number;
}

interface CartContextValue extends State{
    
    addProductToCart: (product: Product) => void;
    removeProductFromCart: (product: CartItem) => void;
    increament: (product: CartItem) => void; 
    chooseSize: (product: any) => void;
    emptyCart: () => void;
    getTotal: () => void;
    
}

export const CartContext = createContext<CartContextValue>({
  addProductToCart: () => {},
  increament: () => {},
  chooseSize: () => {},
  removeProductFromCart: () => {},
  emptyCart: () => {},
  getTotal: () => {},
  cart: [],
  quantity: 0,
  total: 0,
});

class CartProvider extends Component<{}, State> {
  state: State = {
    cart: [],
    quantity: 0,
    total: 0,
  };

  emptyCart = () => {
    this.setState({
      cart: [],
      total: 0,
    });
  };

  increament = (product: CartItem) => {

    const currentProduct = this.state.cart.find((specificProduct) => specificProduct.id === product.id);

    if(currentProduct?.quantity !== undefined && currentProduct.size === product.size){
     const updatedProductQuantity = currentProduct.quantity += 1;
      this.setState({
        quantity: updatedProductQuantity,
        total: product.price * product.quantity,
      })
      console.log(this.state.total);
    }
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
          total: this.state.total,
          quantity: this.state.quantity,
          increament: this.increament,
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
