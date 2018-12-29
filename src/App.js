import React, { Component } from 'react';
import Images from './components/Images.js'
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import * as actions from './actions/fetchImages.js'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'


const Index = () => <h2> Home </h2>
const About = () => <h2> About </h2>

class App extends Component {

componentDidMount() {
  this.props.fetchImages()
}

  render() {
    return (
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />

        <Images images={this.props.images} />
      </div>
    </Router>
    );
  }
}

function mapStateToProps(state) {
  console.log('in map state to props')
  return {images: state.images.pictures}
}

function mapDispatchToProps(dispatch) {
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