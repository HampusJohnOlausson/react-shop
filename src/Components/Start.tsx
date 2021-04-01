import { Button, makeStyles } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "85vh",
    color: "#FFBD2D",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  heroContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: '8rem',
  },
  icon: {
    fontSize: "3rem",
  },
  welcomeText: {
    fontFamily: "Yellowtail, cursive",
    color: "#fff",
    fontSize: "3rem",
    fontWeight: "normal",
  },
  heroTitle: {
    fontSize: "4rem",
  },
  underText: {
    fontWeight: "normal",
    color: "#fff",
  },
  button: {
    background: "#FFBD2D",
    color: "black",
    margin: "1rem",
    alignSelf: "center",
    fontWeight: "bold",
    "&:hover": {
      background: "#D0920A",
    },
  },
}));

const Start = () => {

  const classes = useStyles();

    return (
      <main className={classes.root}>
        <div className={classes.heroContainer}>
          <h3 className={classes.icon}>
            <i className="fas fa-utensils"></i>
          </h3>
          <h3 className={classes.welcomeText}>Välkommen till</h3>
          <h1 className={classes.heroTitle}>Cucina De Romina</h1>
          <h4 className={classes.underText}>
            Äkta tradionell pizza, lagad med kärlek.
          </h4>
          <Button size="large" variant="contained" className={classes.button}>
            Boka Bord
          </Button>
        </div>
      </main>
    );
}

export default Start

