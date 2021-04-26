import React from 'react'
import { Route, Switch } from 'react-router';
import Checkout from './Cart/Checkout';
import ContactPage from './Contact/ContactPage';
import MenuPage from './ProductMenu/MenuPage';
import ProductItem from './ProductMenu/ProductItem';
import ReservationPage from './Reservation/ReservationPage';
import Start from './Start'

const Main = () => {
  
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <Start />
          </Route>
          <Route path="/menu">
            <MenuPage/>
          </Route>
          <Route path="/reservation">
            <ReservationPage/>
          </Route>
          <Route path="/contact">
           <ContactPage/>
          </Route>
          <Route path="/checkout">
            <Checkout/>
          </Route>
          <Route path="/productItem">
            <ProductItem/>
          </Route>
        </Switch>
      </div>
    );
}

export default Main
