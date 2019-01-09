import React, {Component} from 'react'
import { format } from 'url';
/*UI from material-ui*/
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


export default class LoginForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    login(event) {
        const token = window.localStorage.getItem('Token')
        console.log(token)
        const name = event.target.name
        const email = event.target.email
        const password = event.target.password
        const request = {"auth": {"name": name, "email": email, "password": password}}
        debugger
        console.log(request)
        return fetch("http://localhost:3001/api/user_token",{
            method:"POST",
            mode: "cors",
            cahce: "no-cache",
            credentials: "same-origin",
            headers:{
              'Authorization': token
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: JSON.stringify(request),
        })
        .then(response => response.json())
        .catch(function(error) {
            console.log('There has been a problem with your fetch operation: ', error.message);
          });
      }
    render(){
        return (
         <div>
            <MuiThemeProvider>
         <div>
          
        <form id="loginForm" onSubmit={this.login}>
           <input
            type="text"
            name="name"
             placeholder="Enter your Username"
             floatingLabelText="Name"
             onChange = {(event,newValue) => this.setState({name:newValue})}
             />
            <br/>
            <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            floatingLabelText="Email"
            onchange={(event,newValue) => this.setState({email:newValue})} 
            />
           <br/>
             <input
               type="password"
               name="password"
               placeholder="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <button type='submit'>Login</button> 
        </form>
        

     </div>
         </MuiThemeProvider>
            </div>    
        )
    }

}


/* <AppBar
             title="Login"
           />*/