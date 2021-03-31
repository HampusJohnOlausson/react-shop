import React, { Component, createContext } from 'react'
import { Product, ProductData } from "../ProductData"

export const ProductContext = createContext({})

interface State {
    products: Product[],
}

export class ProductProvider extends Component<{}, State> {

    state: State = {
        products: ProductData
    }

    render() {
        return (
            <ProductContext.Provider value={{ProductData: this.state.products}}>
             {this.props.children}   
            </ProductContext.Provider>
        )
    }
}

export default ProductProvider;