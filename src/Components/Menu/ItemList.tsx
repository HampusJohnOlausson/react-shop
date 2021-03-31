import React from 'react'
import { ProductData } from '../../ProductData'
import Item from './Item'

const ItemList = () => {
    return (
        <div>
            { 
              ProductData.map(item => 
              <Item 
              title={item.title} 
              image={item.image}
              description={item.description}
              price={item.price}

              />)
            }
        </div>
    )
}

export default ItemList
