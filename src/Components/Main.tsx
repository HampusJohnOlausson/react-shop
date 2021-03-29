import React from 'react'
import { Route, Switch } from 'react-router';
import ContactPage from './Contact/ContactPage';
import MenuPage from './Menu/MenuPage';
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
        </Switch>
      </div>
    );
}

export default Main
