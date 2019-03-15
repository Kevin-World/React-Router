import React, { Component } from 'react';
import {
  HashRouter as Rourer,//容器
  Route,
  Link
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Home from '../Home';
import Profile from '../Profile';
import User from '../User';

export default (
  <Rourer>
    <div>
      <nav classNname="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <div className="navbar-brand">
              User Manage System
            </div>
          </div>
          <ul className="nav navbar-nav">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/user">User</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Route path="/home" component={Home} />
            <Route path="/user" component={User} />
            <Route path="/profile" component={Profile} />
          </div>
        </div>
      </div>

    </div>
  </Rourer>);