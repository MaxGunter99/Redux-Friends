import React, { Component } from 'react';
import FriendList from './Components/FriendList'
import './App.css';
import Loginpage from './Components/loginpage'
import {Route, } from 'react-router-dom'
import PrivateRoute from './Components/PrivateRoute'

class App extends Component {
  render() {
    return (
      <div>
        <div>
      <Route path = "/login" component = {Loginpage} />

        </div>
      <div>
        <PrivateRoute path = "/friendlist" component = {FriendList} />

      </div>
      </div>
    );
  }
}

export default App;