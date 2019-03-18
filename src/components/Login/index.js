import React from 'react';

export default function (props) {
  console.log(localStorage);
  console.log(props);

  return <button className="btn btn-primary" onClick={() => {
    localStorage.setItem("login", 'true');
    props.history.push(props.location.state.from);
  }}>Login</button>
}