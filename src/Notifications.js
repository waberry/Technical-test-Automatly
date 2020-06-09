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

constructor(props) {
  super(props);
  this.state = { notifications: {
    'coucou':true,'bonjour':true} 
  };
}

remove_notif(notif) {
  var notifications = {...this.state.notifications}
  notifications[notif] = false;
  this.setState({notifications})
  
  }

add_notif(notif) {
  var notifications = {
    ...this.state.notifications,
  [notif] : true}
  
  this.setState({notifications})
  /*
  this.setState(state => {
    const notifications = [...state.notifications, state.value]
    return {
        notifications
       };
    });
  */
  }

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
  
      {
        Object.keys(this.state.notifications).map(notification => (
      <Row value={notification}>
        <Toast onClose={() => {
          this.remove_notif(notification);
          }
        } 
        show={this.state.notifications[notification]} animation={true}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body >{notification}</Toast.Body>
        </Toast>
      </Row>
     ))
    }
    </div>

    );
  }

}

export default Notifications;
