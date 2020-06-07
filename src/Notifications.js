import ReactNotification, { store, } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import React, { Component, style, useState} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Toast from 'react-bootstrap/Toast';
import { Row, Col } from 'react-bootstrap';



class Notifications extends Component {

render() {
	
    return (
      <div>
        <MuiThemeProvider>
            <div>
            <AppBar
               title={"Notifications for " + this.props.match.params.room}
             />
 			</div>
        </MuiThemeProvider>
      
       
      <Row>
      <Col xs={6}>
        <Toast show={true}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </Col>
      
      <Col xs={6} className="my-1">
        <Toast show={true} animation={false}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </Col>
      
    </Row>
  </div>

    );
  }


}

export default Notifications;
