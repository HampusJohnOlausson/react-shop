import { ShoppingBasket } from '@material-ui/icons'
import React from 'react'
import Search from './Search'
import PersonIcon from '@material-ui/icons/Person';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <header className="navbar">
        <div className="left-container">
          <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
              <i className="fas fa-headphones"></i>
          </Link>
        </div>
        <div className="right-container">
          <Search />
          <ul className="nav-list">
            <Link to="/cart">
              <ShoppingBasket style={{ margin: "0rem 2rem 0rem 4rem" }} />
            </Link>
            <Link to="/products">
              <PersonIcon />
            </Link>
          </ul>
        </div>
      </header>
    );
}

export default Navbar
