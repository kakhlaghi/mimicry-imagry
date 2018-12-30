import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUp from '../containers/SignUp';
import SignIn from '../containers/SignIn';
import SignOut from '../containers/SignOut';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Images}/>
    </Switch>
  </main>
)

export default Main;