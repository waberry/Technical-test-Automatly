
/*
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
*/

import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
//import './App.css'

function Login() {
  const [email, setEmail] = useState("");
  

  function validateForm() {
    return email.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
  <div class="wrapper fadeInDown">
    <div id="formContent">

      <div class="fadeIn first">
       <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon"/>
      <div/>

      <form>
       <input type="text" id="login" class="fadeIn second" name="login" placeholder="login">
       <input type="text" id="password" class="fadeIn third" name="login" placeholder="password">
       <input type="submit" class="fadeIn fourth" value="Log In">
      <form/>

    <div id="formFooter">
      <a class="underlineHover" href="#">Forgot Password?<a/>
    <div/>
  <div/>
<div/>
  );
}
export default Login;

