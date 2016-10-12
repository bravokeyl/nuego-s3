import React, {PropTypes} from 'react';
import NueHeader from './common/header';

class NueGo extends React.Component {
  render() {
    return (
      <div>
        <NueHeader />
        {this.props.children}
      </div>
    );
  }
}

NueGo.propTypes = {
  children: PropTypes.object.isRequired
};

export default NueGo;
