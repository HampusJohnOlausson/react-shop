import { Button, makeStyles } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "85vh",
    color: "#FFBD2D",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  heroContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "0rem 0rem 10rem 10rem",
  },
  welcomeText: {
    fontFamily: "Yellowtail, cursive",
    color: "#fff",
    fontSize: "3.5rem",
    fontWeight: "normal",
    marginBottom: "-1rem",
  },
  heroTitle: {
    fontSize: "4.5rem",
  },
  underText: {
    fontSize: "1.6rem",
    fontWeight: "normal",
    color: "#fff",
  },
  button: {
    background: "#FFBD2D",
    color: "black",
    width: "15rem",
    margin: "1rem 0rem",
    borderRadius: '.5rem',
    padding: "1rem 2rem",
    fontSize: "1.4rem",
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

