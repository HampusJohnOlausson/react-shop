import { createContext } from "react";
import { Product } from "../Data/ProductData";
import React, { Component } from "react";

interface CartItem {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  size: string;
  category: string;
  gender: string;
  quantity: number;
}


interface State {
  cart: CartItem[];
  quantity: Number;
  total: Number;
}

interface CartContextValue extends State {
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (id: string) => void;
  increament: (id: string) => void;
  decrease: (id: string) => void;
  chooseSize: (product: any) => void;
  emptyCart: () => void;
  getTotal: (cart: any) => void;
}

export const CartContext = createContext<CartContextValue>({
  addProductToCart: () => {},
  increament: () => {},
  decrease: () => {},
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

  increament = (id: string) => {
    this.state.cart.forEach(item => {
      if(item.id === id){
        item.quantity += 1;
      }
    })
    this.setState({ cart: this.state.cart });
    this.getTotal();
  };

  decrease = (id: string) => {
    this.state.cart.forEach(item => {
      if(item.id === id){
        item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1;
      }
    })
    this.setState({ cart: this.state.cart })
    this.getTotal();
  };

  addProductToCart = (product: Product) => {
    const currentProduct = this.state.cart.find(
    (specificProduct) => specificProduct.id === product.id);

    if (
      currentProduct?.quantity !== undefined &&
      currentProduct.size === product.size
    ) {
      currentProduct.quantity += 1;
      const updateCart = [...this.state.cart];
      this.setState({ cart: updateCart });
      this.getTotal();
    } else {
      const cartItem = { ...product, quantity: 1 };
      let updateCart = [ ...this.state.cart, cartItem];
      this.setState({ cart: updateCart });
      this.getTotal();
    }
    
  };

  chooseSize = (product: CartItem) => {
    console.log(product);
  };

  removeProductFromCart = (id: string) => {
    const { cart }  = this.state;
    cart.forEach((product, index) => {
      if(product.id === id){
        cart.splice(index, 1);
      }
    })
    this.setState({cart: cart});
    this.getTotal();
  };

  getTotal = () => {

    const { cart } = this.state;
    let total = cart.reduce((prev, product) => {
      return prev + (product.price * product.quantity);
    }, 0)
    this.setState({ total: total });
    console.log(total);
  };

  render() {
    console.log(this.state.cart);
    return (
      <CartContext.Provider
        value={{
          cart: this.state.cart,
          total: this.state.total,
          quantity: this.state.quantity,
          increament: this.increament,
          decrease: this.decrease,
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
