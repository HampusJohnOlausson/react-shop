import { makeStyles } from '@material-ui/core';
import React from 'react'

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
  },
}));

const Navbar = () => {

  const classes = useStyles();

    return (
      <header className={classes.root}>
        <nav className={classes.nav}>
          <ul className={classes.list}>
            <li className={classes.home}>R</li>
            <li style={{ marginTop: "1rem" }}>Meny</li>
            <li style={{ marginTop: "1rem" }}>Boka Bord</li>
            <li style={{ marginTop: "1rem" }}>Kontakt</li>
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
