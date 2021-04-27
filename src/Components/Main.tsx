import React from 'react'
import { Route, Switch } from 'react-router';
import Checkout from './Cart/Checkout';
import ContactPage from './Contact/ContactPage';
import SpecificProduct from './ProductMenu/ProductDetails';
import Start from './Start'
import ProductPage from './ProductMenu/ProductPage';

const Main = () => {


    return (
      <div>
        <Switch>
          <Route exact path="/" component={Start}/>
          <Route path="/products" component={ProductPage}/>
          <Route path="/contact" component={ContactPage}/>
          <Route path="/checkout" component={Checkout}/>
          <Route path={"/productItem/:id"} component={SpecificProduct} />
        </Switch>
      </div>
    );
}

export default Main
