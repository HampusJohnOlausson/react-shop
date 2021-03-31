import React, { Component, createContext } from 'react'
import { Product, ProductData } from "../ProductData"

export const ProductContext = createContext({})

interface State {
    ProductData: Product[],
}


export class ProductProvider extends Component<{}, State> {

    state: State = {
        ProductData: ProductData,
    }

    render() {
        return (
            <ProductContext.Provider value={{ProductData: this.state.ProductData}}>
             {this.props.children}   
            </ProductContext.Provider>
        )
    }
}

export default ProductProvider;