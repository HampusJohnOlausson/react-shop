import { NewArrivals } from '../Data/NewArrivals'
import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  slider: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      position: 'relative',
      alignItems: 'center',
      margin: '1rem 0rem',
  },
  slide: {

  },
  image: {
    height: '25rem',
    margin: '2rem',
  },
  arrows: {
      fontSize: '4rem'
  }
}));
const Carousel = () => {

    const classes = useStyles();

    // const [current, setCurrent] = useState(0);
    // const length = slides.length

  return (
    <div className={classes.slider}>
      <ArrowLeft className={classes.arrows}/>
      <div className={classes.slide}>
        {NewArrivals.map((slide) => (
          <img
            className={classes.image}
            key={slide.id}
            src={slide.image}
            alt="clothes"
          />
        ))}
      </div>
      <ArrowRight className={classes.arrows} />
    </div>
  );
};

export default Carousel;
