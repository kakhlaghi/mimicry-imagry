import React, {Component} from 'react'
import { format } from 'url';
/*UI from material-ui*/
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


export default class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }


    login(event) {
        const name = event.target.name
        const email = event.target.email
        const password = event.target.password
        const request = {"auth": {"name": name, "email": email, "password": password}}
        console.log(request)
        return fetch("http://localhost:3001/api/user_token",{
            method:"POST",
            mode: "cors",
            cahce: "no-cache",
            credentials: "same-origin",
            headers:{
                "Content-Type": "application/JSON",
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
          <AppBar
             title="Login"
           />
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Name"
             onChange = {(event,newValue) => this.setState({name:newValue})}
             />
            <br/>
            <TextField
                hintText="Enter your Email"
                floatingLabelText="Email"
                onChange = {(event,newValue) => this.setState({name:newValue})}
            />
            <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
                <button onClick={this.login}> Login</button>      
            </div>
         </MuiThemeProvider>
            </div>    
        )
    }

}