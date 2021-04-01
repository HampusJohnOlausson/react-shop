import React, { useContext } from 'react'
import { ProductContext } from '../../Contexts/ProductContext'
import Item from './Item'

const ItemList = () => {

    const productDataList = useContext(ProductContext)
    return (
        <div>
            { 
              productDataList.products.map((product: any ) => 
                  <Item 
                  key={product.id}
                  product={product}
                  />
              )
            }
        </div>
    )
}

export default ItemList
