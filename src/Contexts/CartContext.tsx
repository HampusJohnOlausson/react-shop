import { createContext } from "react";
import { Product } from "../ProductData";
import React, { Component } from "react";

interface State {
    cart: Product[];
}

interface CartContextValue extends State{
    cart: Product[];
    addProductToCart: (product: Product) => void;
    removeProductFromCart: (product: Product) => void;
    emptyCart: () => void;
}

const CartContext = createContext<CartContextValue>({} as any);


class CartProvider extends Component<{}, State> {

    state: State = {
        cart: [],    
    }
    emptyCart = () => {
        this.setState({ 
            cart: [],
        })
    }


    render() {
        return (
            <CartContext.Provider value={{ 
                cart: this.state.cart }}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}

export default CartProvider;
