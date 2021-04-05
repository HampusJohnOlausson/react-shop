import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { CartContext } from '../Contexts/CartContext';
import '../Sass/Navbar.scss';
import { Component, ContextType } from "react"

interface State {

}
class Navbar extends Component<{}, State> {
    context!: ContextType<typeof CartContext>
    static contextType = CartContext;

    state: State = {};

    render() {

      console.log(this.context.cart.length);
      
      return (
        <header className="root">
          <nav className="nav">
            <ul className="list">
              <Link to="/" className="link">
                <li className="home">R</li>
              </Link>
              <Link to="/menu" className="link">
                <li style={{ marginTop: "1rem" }}>Meny</li>
              </Link>
              <Link to="/reservation" className="link">
                <li style={{ marginTop: "1rem" }}>Boka Bord</li>
              </Link>
              <Link to="/contact" className="link">
                <li style={{ marginTop: "1rem" }}>Kontakt</li>
              </Link>
              <Link to="/cart" className="link">
                <IconButton aria-label="cart">
                  <Badge
                    badgeContent={this.context.cart.length}
                    showZero
                    color="secondary"
                  >
                    <ShoppingCartIcon
                      style={{ color: "#FFBD2D" }}
                      className="icon"
                    />
                  </Badge>
                </IconButton>
              </Link>
            </ul>
          </nav>
        </header>
      );
  }
}

export default Navbar
