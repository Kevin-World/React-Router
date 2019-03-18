import React, { Component } from 'react';

class UserDetail extends Component {
  render() {
    let id = this.props.match.params.id;
    let userStr = localStorage.getItem('users');
    let users = userStr ? JSON.parse(userStr) : [];
    let user = users.find((user) => user.id = id);

    console.log('props', this.props);
    console.log('userStr', userStr);
    console.log('users', users);
    console.log('user', user);

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

export default UserDetail;