
import React from 'react'
import { Route, Switch } from 'react-router'
import Cart from './Cart'
import Start from './Start'
import User from './User/User'


const Main = () => {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <Start />
          </Route>
          <Route path="/user">
            <User/>
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    );
}

export default Main
