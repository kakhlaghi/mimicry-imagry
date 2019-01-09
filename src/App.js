import React, { Component } from 'react';
import { auth } from './utils/init'

import ImagesContainer from './components/ImagesContainer.js'
import Images from './components/Images.js'

import LoginForm from './containers/LoginForm.js'
import About from './components/About'

import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import * as actions from './actions/fetchImages.js'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Row } from 'react-bootstrap';


const Index = () => <h2> Home </h2>
const Register = () => <h2> Register </h2>


class App extends Component {
    constructor(){
      super()
      this.state={
        images: []
      }
    }



componentDidMount() {
  this.props.fetchImages()
}

handleOnClick(event){
  event.preventDefault()
  let e = event.target.id
  console.log(e)
}

  render() {
    return (
      <Router>
      <div>
      <Navbar className='App-header'>
        <Navbar.Brand>
          <NavItem eventKey={1}>
            <Link to="/">Mimcry-Imagry </Link>
          </NavItem>
        </Navbar.Brand>
          <Link to="/about/">About </Link>
          <Link to="/register/">Register </Link>
          <Link to="/login/">Log In </Link>
       </Navbar>
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/register/" component={Register} />
        <Route path="/login/" component={LoginForm} />
        <Grid >
          <Row>
            <Images images={this.props.images} />
          </Row>
        </Grid> 
     </div>
    </Router>
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



/*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>*/