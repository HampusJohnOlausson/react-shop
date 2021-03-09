import { ShoppingBasket } from '@material-ui/icons'
import React from 'react'
import Search from './Search'
import PersonIcon from '@material-ui/icons/Person';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <header className="navbar">
        <div className="left-container">
          <Link to="/" style={{ textDecoration: "none", color: '#000' }}>
            <h2>T-shirt Store</h2>
          </Link>
        </div>
        <div className="right-container">
          <Search />
          <ul className="nav-list">
            <Link to="/cart" >
              <ShoppingBasket />
            </Link>
            <Link to="/user">
              <PersonIcon />
            </Link>
          </ul>
        </div>
      </header>
    );
}

export default Navbar
