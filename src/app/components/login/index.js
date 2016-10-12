import React from 'react';
import auth from './auth';
import { browserHistory, Router, Route, Link, withRouter } from 'react-router';

import '../../../www/styles/login.css';

class NueLogin extends React.Component {
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
      event.preventDefault();
      alert("You should not be doing this");
  }

  render(){
    return(
      <div className="login-wrap">
        <div className="login-container">
            <div className="login-logo">NuevoGo</div>
            <div className="login-item">
                <form action="" className="form form-login">
                    <div className="form-field">
                        <label className="user" htmlFor="login-username"><span className="hidden">Username</span></label>
                        <input id="login-username" type="text" className="form-input" placeholder="Username" required />
                    </div>

                    <div className="form-field">
                        <label className="lock" htmlFor="login-password"><span className="hidden">Password</span></label>
                        <input id="login-password" type="password" className="form-input" placeholder="Password" required />
                    </div>

                    <div className="form-field">
                        <input type="submit" id="nue-login" value="Log in" />
                    </div>
                </form>
            </div>
        </div>
      </div>
    );
  }
}
export default NueLogin;
