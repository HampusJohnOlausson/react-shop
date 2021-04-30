import { NewArrivals } from '../Data/NewArrivals'
import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  slider: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    position: "relative",
    alignItems: "center",
    margin: "1rem 0rem",
  },
  slide: {},
  image: {
    borderRadius: ".4rem",
    height: "25rem",
    margin: "2rem",
  },
  arrowRight: {
    fontSize: "4rem",
    cursor: "pointer",
    position: "absolute",
    top: "50%",
    right: "3rem",
    zIndex: 10,
    userSelect: "none",
  },
  arrowLeft: {
    fontSize: "4rem",
    cursor: "pointer",
    position: "absolute",
    left: "3rem",
    top: "50%",
    zIndex: 10,
    userSelect: "none",
  }
}));

interface Props {
  NewArrivals: Array<{}>
}
const Carousel = (props: Props) => {

    const classes = useStyles();

    const [current, setCurrent] = useState(0);
    const length = NewArrivals.length;

    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }
    
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    }

    console.log(current);

    //if there is a problem with the array of images return null
    if(!Array.isArray(NewArrivals) || NewArrivals.length <= 0){
      return null; 
    }
    

  return (
    <div className={classes.slider}>
      <ArrowLeft onClick={prevSlide} className={classes.arrowLeft}/>
      <div className={classes.slide}>
        {NewArrivals.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slider active' : 'slide'}
              key={index}
            >
              {index === current && (
                <img
                  className={classes.image}
                  key={slide.id}
                  src={slide.image}
                  alt="clothes"
                />
              )}
            </div>
          );
          })}
      </div>
      <ArrowRight onClick={nextSlide} className={classes.arrowRight} />
    </div>
  );
};

export default Carousel;
