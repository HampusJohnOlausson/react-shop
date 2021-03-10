
import React from 'react'
import { Route, Switch } from 'react-router'
import Cart from './Cart'
import Products from './Products/Products'
import Start from './Start'


const Main = () => {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <Start />
          </Route>
          <Route path="/products">
            <Products/>
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    );
}

export default Main
