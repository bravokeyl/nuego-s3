import React from 'react';
import NueSubHeader from '../common/sub-header';
import NueTrackerDetail from './detail.js';

class NueTracker extends React.Component {
  constructor(props,context) {
      super(props,context);
  }
  render(){
    return(
    <div className="tracker-detail">
      <NueSubHeader/>
      <NueTrackerDetail/>
    </div>);
  }
}

export default NueTracker;
