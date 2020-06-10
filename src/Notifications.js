import 'react-notifications-component/dist/theme.css';

import React, { Component, style,}  from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Toast from 'react-bootstrap/Toast';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Row, Col} from 'react-bootstrap';
import io from "socket.io-client";

class Notifications extends Component {

constructor(props) {
  super(props);

  this.state = {
      notifications: {},
      notifier: {message: "", room : ""},
  };
  this.add_notif=this.add_notif.bind(this);
  this.notify=this.notify.bind(this);
  const socket = io.connect('localhost:8080');
  socket.emit("join", this.props.match.params.room);
  socket.on("notification", this.add_notif);
}

remove_notif(notif) {
  var notifications = {...this.state.notifications}
  notifications[notif] = false;
  this.setState({notifications})

  }

notify() {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message : this.state.notifier.message })
    };
    fetch('http://localhost:8080/notify/' + this.state.notifier.room, requestOptions)
}

add_notif(notif) {
  var notifications = {
    ...this.state.notifications,
  [notif] : true}
  this.setState({notifications})
  }

refresh_message(newmessage){
    var notifier = {
      ...this.state.notifier,
    message : newmessage}
    this.setState({notifier})
}

refresh_room(newroom){
    var notifier = {
      ...this.state.notifier,
    room : newroom}
    this.setState({notifier})
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

    <Col>
        <TextField
          hintText="Enter Room Name"
          floatingLabelText="Room Name"
          onChange = {(event,newValue) => this.refresh_room(newValue)}
          />
        <TextField
            hintText="Enter message"
            floatingLabelText="Message"
            onChange = {(event,newValue) => this.refresh_message(newValue)}
        />
          <RaisedButton label="Notify"
         primary={true} style={style} onClick={this.notify}/>
    </Col>

    <Col>
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
              src=""
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">🚨TODO</strong>
          </Toast.Header>
          <Toast.Body >{notification}</Toast.Body>
        </Toast>
      </Row>
     ))
    }
    </Col>
    </MuiThemeProvider>
    </div>


    );
  }

}

export default Notifications;
