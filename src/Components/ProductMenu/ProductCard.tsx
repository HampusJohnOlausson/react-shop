import { Button } from '@material-ui/core'
import { Product } from '../../Data/ProductData'
import { Link } from "react-router-dom";
import React from 'react'
import productCardStyles from '../../Style/ProductCardStyles'


interface Props {
  product: Product;
}
const ProductCard = (props: Props) =>{

    const classes = productCardStyles();

    return (
      <div>
        <Link
          to={`/productItem/${props.product.id}`}
          key={props.product.id}
          className={classes.link}
        >
          <div className={classes.productContainer}>
            <img src={props.product.image} alt="" className={classes.image} />
            <div className={classes.infoSection}>
              <h4 className={classes.title}>{props.product.title}</h4>
              <span
                className={classes.price}
              >{`${props.product.price} SEK`}</span>
              <Button
                size="small"
                variant="contained"
                className={classes.button}
              >
                More info
              </Button>
            </div>
          </div>
        </Link>
      </div>
    );
}

export default ProductCard;
