import React from 'react'
import { Product } from '../../ProductData'

interface Props {
  product: Product;
}
const Item = (props: Props) => {
    return (
        <div>
            <img src={props.product.image} alt="pizza"/>
            <h4>{props.product.title}</h4>
            <p>{props.product.description}</p>
            <span>{props.product.price}</span>
        </div>
    )
}

export default Item
