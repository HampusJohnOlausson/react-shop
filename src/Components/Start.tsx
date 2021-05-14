import { Button} from '@material-ui/core';
import React from 'react'
import { Link } from "react-router-dom";
import { NewArrivals } from '../Data/NewArrivals';
import Carousel from './Carousel';
import startStyles from '../Style/StartStyles'

const Start = () => {

  const classes = startStyles();

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

