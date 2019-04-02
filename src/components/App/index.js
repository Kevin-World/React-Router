import React from 'react';
import {
  BrowserRouter as Rourer,//容器
  Route,
  Switch
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

import Home from '../Home';
import Profile from '../Profile';
import User from '../User';
import Login from '../Login';
import ProtectedRoute from '../../Route/ProtectedRoute';
import MenuLink from '../../Route/MenuLink';

export default (
  <Rourer>
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <div className="navbar-brand">
              User Manage System
            </div>
          </div>
          <ul className="nav navbar-nav">
            <MenuLink to="/home" lable="Home" />
            <MenuLink to="/user" lable="User" />
            <MenuLink to="/profile" lable="Profile" />
          </ul>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Switch>
              <Route exact path="/" render={() => <div>Homepage</div>}></Route>
              <Route path="/home" component={Home} />
              <Route path="/user" component={User} />
              <Route path="/login" component={Login} />
              <ProtectedRoute path="/profile" component={Profile} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  </Rourer>);