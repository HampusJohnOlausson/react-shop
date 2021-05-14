import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { CartContext } from '../Contexts/CartContext';
import navStyles from '../Style/NavStyles';
import { useContext} from "react"

const Navbar = () => {
  
    const classes = navStyles();

    const cartContext = useContext(CartContext);

      return (
        <header className={classes.root}>
          <nav className={classes.nav}>
            <ul className={classes.list}>
              <Link to="/" className={classes.link}>
                <li className={classes.home}>F</li>
              </Link>
              <Link to="/products" className={classes.link}>
                <li style={{ marginTop: "1rem" }}>Products</li>
              </Link>
              <Link to="/contact" className={classes.link}>
                <li style={{ marginTop: "1rem" }}>Contact</li>
              </Link>
              <Link to="/checkout" className={classes.link}>
                <IconButton aria-label="cart">
                  <Badge
                    badgeContent={cartContext.cart.length}
                    showZero
                    color="secondary"
                  >
                    <ShoppingCartIcon
                      style={{ color: "#28c7fa" }}
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

export default Navbar
