import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Login from './Login';
import Notifications from './Notifications';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <Switch>
              <Route exact path='/' component={Login} />
              <Route path='/notifications/:room' component={Notifications}/>
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;