import { createContext } from "react";
import { Product } from "../ProductData";
import React, { Component } from "react";

interface State {
    cart: Product[];
}

interface CartContextValue extends State{
    
    addProductToCart: (product: Product) => void;
    removeProductFromCart: (product: Product) => void;
    emptyCart: () => void;
}

export const CartContext = createContext<CartContextValue>({

    addProductToCart: () => { },
    removeProductFromCart: () => { },
    emptyCart: () => { },
    cart: [],
});

class CartProvider extends Component<{}, State> {

    state: State = {
        cart: [],    
    }

    emptyCart = () => {
        this.setState({ 
            cart: [],
        })
    }

    addProductToCart = (product: Product) => {
        const updateCart = {...this.state.cart, product}
        this.setState({ 
            cart: updateCart 
        })
    }

    removeProductFromCart = () => {
        // const updateCart = {...this.state.cart}

        // this.setState({
        //     cart: 
        // })
    }


    render() {

        console.log(this.state.cart);
        return (
          <CartContext.Provider
            value={{
              cart: this.state.cart,
              emptyCart: this.emptyCart,
              addProductToCart: this.addProductToCart,
              removeProductFromCart: this.removeProductFromCart,
            }}
          >
            {this.props.children}
          </CartContext.Provider>
        );
    }
}

export default CartProvider;
