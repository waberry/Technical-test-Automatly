import React, { Component, style } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  }
 }

handleClick(event){
 var payload={
 "username":this.state.username}
}

render() {
    return (
      <div>
        <MuiThemeProvider>
            <div>
            <AppBar
               title="Login"
             />
             <TextField
               hintText="Enter your Username"
               floatingLabelText="Username"
               onChange = {(event,newValue) => this.setState({username:newValue})}
               />
               <RaisedButton label="Submit"
              href={'/notifications/' + this.state.username}
              primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
           </div>
         </MuiThemeProvider>
      </div>
    );
  }

}

export default Login;
