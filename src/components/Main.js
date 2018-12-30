import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ImageListContainer from '../containers/ImageListContainer';
import UserImageListContainer from '../containers/UserImageListContainer';
import SignUp from '../containers/SignUp';
import SignIn from '../containers/SignIn';
import SignOut from '../containers/SignOut';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Images}/>
      <Route path='/profile' component={UserImageListContainer} />
    </Switch>
  </main>
)

export default Main;