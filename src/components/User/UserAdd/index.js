import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

class UserAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blocking: false
    }
  }

  handleSubmit = () => {
    let name = this.name.value;
    let userStr = localStorage.getItem('users');
    let user = userStr ? JSON.parse(userStr) : [];
    user.push({ id: Date.now(), name });
    localStorage.setItem('users', JSON.stringify(user));

    this.setState(
      { blocking: false },
      () => this.props.history.push('/user/list'));
  }

  handleChange = (e) => {
    let blocking = false;
    if (e.target.value === "" || e.target.value.length === 0)
      blocking = false;
    else
      blocking = true;

    this.setState({
      blocking: blocking
    })
  }

  render() {
    return (
      <div>
        <Prompt when={this.state.blocking}
          message={(location) => `Are you sure go to ${location.pathname} ?`} />

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input onChange={this.handleChange} type="text" className="form-control" ref={(ref) => this.name = ref} />
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

export default UserAdd;