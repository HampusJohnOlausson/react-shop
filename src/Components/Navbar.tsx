import { makeStyles } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles((theme) => ({

  root: {
    minHeight: '10vh',
    background: 'red',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nav: {
    width: '50%',
  },
  list: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    listStyle: 'none',
    fontSize: '1.2rem',
  },

}));

const Navbar = () => {

  const classes = useStyles();

    return (
      <header className={classes.root}>
        <nav style={{width: '50%'}}>
          <ul className={classes.list}>
            <li>R</li>
            <li>Meny</li>
            <li>Boka Bord</li>
            <li>Kontakt</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </nav>
      </header>
    );
}

export default Navbar
