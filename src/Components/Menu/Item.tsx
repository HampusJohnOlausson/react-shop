import { Button } from '@material-ui/core'
import { Component, ContextType } from 'react'
import { Product } from '../../ProductData'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import '../../Sass/Item.scss';
import { CartContext } from '../../Contexts/CartContext';

interface Props {
  product: Product;
}
class Item extends Component<Props>{

    context!: ContextType<typeof CartContext>
    static contextType = CartContext;

    render(){

    return (
      <div className="productContainer">
        <img src={this.props.product.image} alt="pizza" className="image" />
        <h4 className="title">{this.props.product.title}</h4>
        <span className="price">{`${this.props.product.price} SEK`}</span>
        <Button
          size="small"
          variant="contained"
          className="button"
        >
          {" "}
          <ShoppingCartIcon className="icon" />{" "}
        </Button>
      </div>
    );
  }
}

export default Item;
