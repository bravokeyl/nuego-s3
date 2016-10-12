import React from 'react';
import { IndexLink, Link } from 'react-router';

let avatar = '../../../images/avatar.jpg';

class NueHeader extends React.Component {
  render() {
    return(
      <header className="top-header">
        <div className="nav-block">
            <div className="logo">Nuevosol</div>
            <ul className="nav">
              <li><IndexLink to="/trackers" activeClassName="active" title="dashboard">dashboard</IndexLink></li>
              <li><Link to="/logs" activeClassName="active">logs</Link></li>
              <li><Link to="/support" activeClassName="active">support</Link></li>
            </ul>
        </div>
        <div className="profile-block">
            <ul className="nav">
                <li className="notifications"><a href="/notifications"><i className="fa fa-bell" aria-hidden="true"></i></a></li>
                <li className="profile">
                    <a href="/profile.html"><img className="avatar" src="{avatar}" /><i className="fa fa-chevron-down" aria-hidden="true"></i></a>
                </li>
            </ul>
        </div>
    </header>
    );
  }
}
export default NueHeader;
