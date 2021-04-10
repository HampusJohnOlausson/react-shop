import React, { Component, createContext } from 'react'
import { Product, ProductData } from "../ProductData";


interface State {
  products: Product[];
}
interface ProductValue extends State {
  
}

export const ProductContext = createContext<ProductValue>({
  products: [],
});

class ProductProvider extends Component<{}, State> {

    state: State = {
        products: ProductData
    }


    render() {
        return (
            <ProductContext.Provider value={{
            products: this.state.products}}>
             {this.props.children}   
            </ProductContext.Provider>
        )
    }
}

export default ProductProvider;