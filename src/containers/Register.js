import React, {Component} from 'react'
import LoginForm from './LoginForm'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



export default class Register extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    signup(event) {
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        const request = {"auth": {"name": name, "email": email, "password": password}}
        console.log(request)
        return fetch("http://localhost:3001/api/signup",{
            method:"POST",
            mode: "cors",
            redirect: "localhost:3000/",
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
            <h2> Register </h2>
         <div>
          
        <form className="loginForm" onSubmit={this.signup}>
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
             <button type='submit'>Register</button> 
        </form>
     </div>
         </MuiThemeProvider>
</div>    
        )
    }
} 