import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ImagesContainer from './ImagesContainer'
import Images from './Images'
import ImageList from '../containers/ImageList';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={ImageList} />
    </Switch>
  </main>
)

export default Main;