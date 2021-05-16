import { faLaptopHouse } from '@fortawesome/free-solid-svg-icons';
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
            Postnord <span className={classes.span}>2-3 bussiness days</span>
          </div>
          <div onClick={() => choseCompany("Bring")} className={classes.btn}>
            Bring<span className={classes.span}>3-5 bussiness days</span>
          </div>
          <div onClick={() => choseCompany("Instabox")} className={classes.btn}>
            Instabox<span className={classes.span}>2-3 bussiness days</span>
          </div>
        </div>
      </div>
    );
}

export default DelivaryDetails
