import React, { useContext } from 'react'
import { ProductContext } from '../../Contexts/ProductContext'
import { ProductData } from '../../ProductData'
import Item from './Item'

const ItemList = () => {

    const productDataList = useContext(ProductContext)
    return (
        <div>
            { 
              productDataList.ProductData.map((product: any ) => 
                  <Item 
                  key={product.title}
                  product={product}
                  />
              )
            }
        </div>
    )
}

export default ItemList
