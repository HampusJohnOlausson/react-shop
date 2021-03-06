import { NewArrivals } from '../Data/NewArrivals'
import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import carouselStyles from '../Style/CarouselStyles'
import '../Style/Carousel.css';

interface Props {
  NewArrivals: Array<{}>
}
const Carousel = (props: Props) => {

    const classes = carouselStyles();

    const [current, setCurrent] = useState(1);
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
      <div>
        {NewArrivals.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
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
