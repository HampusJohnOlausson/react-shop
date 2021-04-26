import React, { useContext } from 'react'
import { ProductContext } from '../../Contexts/ProductContext'

const ProductItem = () => {

    const productContext = useContext(ProductContext)
    return (
        <div>
            {
                productContext.products.map((product) => (
                    <li key={product.id}>{product.price}</li>
                ))
            }
        </div>
    )
}

export default ProductItem
