import React from 'react';
import { Route, Link } from 'react-router-dom';

export default function ({ to, lable }) {
  return (
    <Route path={to} children={({ match }) => {
      return (
        <li className={match ? 'active' : ''} >
          <Link to={to}>{lable}</Link>
        </li>)
    }} />
  )
}