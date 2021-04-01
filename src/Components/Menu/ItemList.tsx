import { makeStyles } from '@material-ui/core';
import React, { useContext } from 'react'
import { ProductContext } from '../../Contexts/ProductContext'
import Item from './Item';


const useStyles = makeStyles((theme) => ({

    list: {
        padding: '4rem 2rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    }
}))

const ItemList = () => {

    const classes = useStyles();

    const productDataList = useContext(ProductContext)
    return (
        <div className={classes.list}>
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
