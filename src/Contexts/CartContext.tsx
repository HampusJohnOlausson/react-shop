import { createContext } from "react";
import { Product } from "../Data/ProductData";
import React, { Component } from "react";
import Cart from "../Components/Cart/Cart";

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
    getTotal: (product: CartItem) => void;
    
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
     const updatedPrice = product.price * product.quantity;
      this.setState({
        quantity: updatedProductQuantity,
        total: updatedPrice,
      })
      console.log(this.state.total);
    } 
  }; 

  addProductToCart = (product: Product) => {

    const currentProduct = this.state.cart.find((specificProduct) => specificProduct.id === product.id);
    
    if(currentProduct?.quantity !== undefined && currentProduct.size === product.size){
      currentProduct.quantity += 1;
      const updateCart = [...this.state.cart];
      this.setState({ cart: updateCart });
    }else {
      const quantity = 1;
      const cartItem = {...product, quantity};
      let updateCart = [...this.state.cart, cartItem];
      this.setState({ cart: updateCart });
    }
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

  getTotal = (product: CartItem) => {
      const updatedTotal = product.price * Cart.length;
      this.setState({ total: updatedTotal})
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
