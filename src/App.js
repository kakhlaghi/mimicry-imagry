import React, { Component } from 'react';
import { auth } from './utils/init'

import ImagesContainer from './components/ImagesContainer.js'
import Images from './components/Images.js'

import LoginForm from './containers/LoginForm.js'
import Register from './containers/Register.js'
import About from './components/About'
import Header from './components/Header'

import './App.css';
import * as actions from './actions/fetchImages.js'
import saveImage from './actions/imageActions.js'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Row } from 'react-bootstrap';


const Index = () => <h2> Home </h2>

class App extends Component {
  constructor(props){
    super(props)
    const { dispatch } = props
  }


componentDidMount() {
  console.log(dispatch)
  console.log(state)
  this.props.fetchImgurImages()
  
}

handleOnClick(event){
  event.preventDefault()
  let e = event.target.id
  console.log(e)
}

  render() {
    return (
      <div>
        <Header />

        <ImagesContainer />
        <Grid >
          <Row>
           <Images images={this.props.images} saveImage={ this.props.actions.saveImage } />
          </Row>
        </Grid>
        
     </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('hit mapstatetoprops')
  return {images: state.images.pictures}
}

function mapDispatchToProps(dispatch) {
  console.log('mapdispatch to props')
  return {actions: bindActionCreators(actions, dispatch)}
}

export const WrapperApp = connect( mapStateToProps, {...actions} )(App)

