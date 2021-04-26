import React from 'react'
import { Route, Switch } from 'react-router';
import Checkout from './Cart/Checkout';
import ContactPage from './Contact/ContactPage';
import MenuPage from './ProductMenu/MenuPage';
import SpecificProduct from './ProductMenu/SpecificProduct';
import Start from './Start'

const Main = () => {


    return (
      <div>
        <Switch>
          <Route exact path="/">
            <Start />
          </Route>
          <Route path="/menu">
            <MenuPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path={"/productItem/:id"}>
            <SpecificProduct/>
          </Route>
        </Switch>
      </div>
    );
}

export default Main
