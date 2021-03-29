import { makeStyles } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "10vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
  },
  nav: {
    width: "50%",
  },
  list: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    listStyle: "none",
    fontSize: "1.2rem",
  },
  home: {
    fontFamily: "Yellowtail, cursive",
    color: "#FFBD2D",
    fontWeight: "bold",
    fontSize: "2.5rem",
  },
  icon: {
    fontSize: "2.5rem",
  },
}));

const Navbar = () => {

  const classes = useStyles();

    return (
      <header className={classes.root}>
        <nav style={{ width: "50%" }}>
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
