import React, {PropTypes} from 'react';
import NueHeader from './common/header';
import NueLogin from './login';

class NueGo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  render() {
    return (
      <div>
          {this.state.loggedIn ? (
            <div>
              <NueHeader />
              {this.props.children}
            </div>
          ) : (
            <NueLogin/>
          )}
      </div>
    );
  }
}

NueGo.propTypes = {
  children: PropTypes.object.isRequired
};

export default NueGo;
