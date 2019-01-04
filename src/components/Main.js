import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ImagesContainer from './ImagesContainer'
import Images from './Images'
import ImageList from '../containers/ImageList';

import { Grid, Row } from 'react-bootstrap';


const Main = (props) => (


  <main>
    <Grid>
      <Row>
        <Images />
      </Row>
    </Grid>   
  </main>
)

export default Main;