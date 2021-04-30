import { Button, makeStyles } from '@material-ui/core';
import React from 'react'
import { Link } from "react-router-dom";
import { NewArrivals } from '../Data/NewArrivals';
import Background from "../Images/Background.jpg";
import Carousel from './Carousel';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "85vh",
    color: "#28c7fa",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
  },
  heroContainer: {
    width: "80%",
    height: "37rem",
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    display: "flex",
    padding: " 4rem 8rem",
    flexDirection: "column",
    justifyContent: "center",
    margin: "0rem auto 6rem",
  },
  welcomeText: {
    color: "#fff",
    fontSize: "2.2rem",
    fontWeight: "normal",
    marginBottom: "-1rem",
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
  },
  heroTitle: {
    fontSize: "5.5rem",
    fontFamily: "Mr Dafoe, cursive",
    fontWeight: "normal",
    marginBottom: "-.5rem",
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
  },
  underText: {
    fontSize: "1.2rem",
    fontWeight: "normal",
    color: "#fff",
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
  },
  button: {
    background: "#28c7fa",
    color: "#fff",
    width: "10rem",
    margin: "1rem 0rem",
    borderRadius: ".5rem",
    padding: ".5rem 2rem",
    fontSize: "1.2rem",
    fontWeight: "bold",
    transitionDuration: '0.4s',
    "&:hover": {
      background: "#20A5CF",
    },
  },
  newArrivalsContainer: {

  },
  newArrivalsTitle: {
    color: "#fff",
    textAlign: "center",
    fontSize: "2rem",
  },
  newProductsContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  footer: {
    background: "#28c7fa",
    height: '10rem',
    width: '100%',
  },
  link: {
    textDecoration: 'none',
  }
}));

const Start = () => {

  const classes = useStyles();

    return (
      <main className={classes.root}>
        <div className={classes.heroContainer}>
          <h3 className={classes.welcomeText}>Welcome to</h3>
          <h1 className={classes.heroTitle}>Fashion &nbsp;State</h1>
          <span className={classes.underText}>
            Match your style for your state of mind
          </span>
          <Link to="/products" className={classes.link}>
            <Button size="large" variant="contained" className={classes.button}>
              Go Shop
            </Button>
          </Link>
        </div>
        <div className={classes.newArrivalsContainer}>
          <h3 className={classes.newArrivalsTitle}>New Arrivals</h3>
          <div className={classes.newProductsContainer}></div>
            <Carousel NewArrivals={NewArrivals}/>
        </div>
        <footer className={classes.footer}></footer>
      </main>
    );
}

export default Start

