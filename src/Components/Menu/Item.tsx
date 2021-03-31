import React from 'react'

interface Props {
//   id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}
const Item = (props: Props) => {
    return (
        <div>
            <img src={props.image} alt=""/>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <span>{props.price}</span>
        </div>
    )
}

export default Item
