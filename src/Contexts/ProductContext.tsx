import React, { Component, createContext } from 'react'
import { Product, products } from "../ProductData"

export const ProductContext = createContext({

    products: [],
})

interface State {
    products: Products[],
}


export class ProductProvider extends Component<{}, State> {

    state: State = {
        products: products, 
    }
    render() {
        return (
            <ProductContext.Provider value={{products: this.state.products}}>
             {this.props.children}   
            </ProductContext.Provider>
        )
    }
}
