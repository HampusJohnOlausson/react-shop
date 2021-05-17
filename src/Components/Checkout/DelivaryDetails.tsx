import React, { useState } from 'react'
import deliveryDetailsStyles from '../../Style/DeliveryDetailsStyles'

const DelivaryDetails = () => {

    const classes = deliveryDetailsStyles();
    const [chosenDelivery, setChosenDelivery] = useState('');

    const choseCompany = (company: string) => {
        setChosenDelivery(company);
        console.log(company);
    }

    return (
      <div>
        <h2 className={classes.title}>Delivary Details</h2>
        <div className="option-container">
          <div onClick={() => choseCompany("Postnord")} className={classes.btn}>
            Postnord <h3 className={classes.price}>3$</h3>{" "}
            <span className={classes.span}>2-3 bussiness days</span>
          </div>
          <div onClick={() => choseCompany("Bring")} className={classes.btn}>
            Bring <h3 className={classes.price}>4$</h3>{" "}
            <span className={classes.span}>3-5 bussiness days</span>
          </div>
          <div onClick={() => choseCompany("Instabox")} className={classes.btn}>
            Instabox <h3 className={classes.price}>3$</h3>{" "}
            <span className={classes.span}>2-3 bussiness days</span>
          </div>
        </div>
      </div>
    );
}

export default DelivaryDetails
