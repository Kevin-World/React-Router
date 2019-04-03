import React, { Component } from 'react';

export default class UserDetail extends Component {
  render() {
    let id = this.props.match.params.id;
    let userStr = localStorage.getItem('users');
    let users = userStr ? JSON.parse(userStr) : [];
    let user = users.find(user => (user.id == id));

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Path</td>
            <td>Url</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{id}</td>
            <td>{user.name}</td>
            <td>{this.props.match.path}</td>
            <td>{this.props.match.url}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}