import { makeStyles } from '@material-ui/core'
import React from 'react'
import { Product } from '../../ProductData'

const useStyles = makeStyles((theme) => ({

    productContainer: {
        width: '20rem',
        height: '10rem',
        boxShadow: '0 15px 25px black',
        borderRadius: '.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '2rem',
        position: 'relative',
        padding: '1rem',
    },
    image: {
        borderRadius: '50%',
        width: '7rem',
        height: '7rem',
        position: 'absolute',
        top: -25,
        left: -25,
        boxShadow: '0 15px 25px rgba(0, 0, 0, 0.5)',
    },
    title: {
        fontSize: '1.2rem',
        
    },
    description: {
        fontWeight: 100,
    },
    price: {
        textAlign: 'center',
        color: 'yellow',
    }
}))

interface Props {
  product: Product;
}
const Item = (props: Props) => {

    const classes = useStyles();

    return (
        <div className={classes.productContainer}>
            <img src={props.product.image} alt="pizza" className={classes.image}/>
            <h4 className={classes.title}>{props.product.title}</h4>
            <span className={classes.description}>{props.product.description}</span>
            <span className={classes.price}>{props.product.price}</span>
        </div>
    )
}

export default Item
