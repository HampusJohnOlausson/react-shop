import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { CartContext } from '../Contexts/CartContext';
import { makeStyles } from "@material-ui/core";

import { useContext} from "react"

const useStyles = makeStyles(() => ({
    root: {
      minHeight: '15vh',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
nav: {
    width: '75%',
},
list: {
    width: '100%;',
    display: 'flex',
    justifyContent: 'space-between',
    listStyle: 'none',
    fontSize: '1.4rem',
},
home: {
    fontFamily: 'Yellowtail, cursive',
    color: '#FFBD2D',
    fontWeight: 'bold',
    fontSize: '3rem',
},
icon: {
    fontSize: '2.5rem',
    cursor: 'pointer',
},
link: {
    textDecoration: 'none',
    color: '#fff',
},
  
}))

const Navbar = () => {
  
    const classes = useStyles();

    const cartContext = useContext(CartContext);

      return (
        <header className={classes.root}>
          <nav className={classes.nav}>
            <ul className={classes.list}>
              <Link to="/" className={classes.link}>
                <li className={classes.home}>R</li>
              </Link>
              <Link to="/menu" className={classes.link}>
                <li style={{ marginTop: "1rem" }}>Meny</li>
              </Link>
              <Link to="/reservation" className={classes.link}>
                <li style={{ marginTop: "1rem" }}>Boka Bord</li>
              </Link>
              <Link to="/contact" className={classes.link}>
                <li style={{ marginTop: "1rem" }}>Kontakt</li>
              </Link>
              <Link to="/cart" className={classes.link}>
                <IconButton aria-label="cart">
                  <Badge
                    badgeContent={cartContext.cart.length}
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

export default Navbar
