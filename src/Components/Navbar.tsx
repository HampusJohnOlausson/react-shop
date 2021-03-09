import { ShoppingBasket } from '@material-ui/icons'
import React from 'react'
import Search from './Search'

import PersonIcon from '@material-ui/icons/Person';

const Navbar = () => {
    return (
      <header className="navbar">
        <div className="left-container">T-shirt Store</div>
        <div className="right-container">
          <Search />
          <ul className="nav-list">
            <ShoppingBasket></ShoppingBasket>
            <PersonIcon></PersonIcon>
          </ul>
        </div>
      </header>
    );
}

export default Navbar
