import { makeStyles } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "15vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  nav: {
    width: "75%",
  },
  list: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    listStyle: "none",
    fontSize: "1.4rem",
  },
  home: {
    fontFamily: "Yellowtail, cursive",
    color: "#FFBD2D",
    fontWeight: "bold",
    fontSize: "3rem",
  },
  icon: {
    fontSize: "3rem",
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'none',
    color: '#fff'

  }
}));

const Navbar = () => {

  const classes = useStyles();

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
            <li className={classes.icon}>
              <i className="fab fa-twitter"></i>
            </li>
            <li className={classes.icon}>
              <i className="fab fa-instagram"></i>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Navbar
