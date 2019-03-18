import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import UserList from './UserList';
import UserAdd from './UserAdd';
import UserDetail from '../User/UserDetail';

class User extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-2">
          <ul className="nav nav-stacked">
            <li><Link to="/user/list">User List</Link></li>
            <li><Link to="/user/add">New User</Link></li>
          </ul>
        </div>
        <div className="col-sm-10">
          <Switch>
            <Route path="/user/list" component={UserList}></Route>
            <Route path="/user/add" component={UserAdd}></Route>
            <Route path="/user/detail/:id" component={UserDetail}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default User;