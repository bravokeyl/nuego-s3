import React, {PropTypes} from 'react';
import NueSubHeader from '../common/sub-header';
import NueDashMain from './dash.js';

class NueDashboard extends React.Component {
  constructor(props,context) {
      super(props,context);
  }
  render() {
    return(
      <div className="dashboard">
        <NueSubHeader/>
        <NueDashMain/>
      </div>
    );
  }
}

export default NueDashboard;
