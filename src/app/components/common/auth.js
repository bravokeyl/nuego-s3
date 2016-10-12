import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';

class NueAuth extends Component {
render() {
  return (
    <div>
      <ul>
        <li>
          {this.state.loggedIn ? (<Link to="/">Log out</Link>) :
          (<Link to="/ngt">Sign in</Link>)}
        </li>
      </ul>
    </div>
  );
}

}

export default NueAuth;
