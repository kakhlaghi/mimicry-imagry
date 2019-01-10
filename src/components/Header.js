import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Row } from 'react-bootstrap';
import LoginForm from '../containers/LoginForm.js'
import Register from '../containers/Register.js'
import About from './About'

const Index = () => <h2> Home </h2>


const Header = () => {

    return(
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
        </div>   
     </Router>    
    )
}

export default Header 