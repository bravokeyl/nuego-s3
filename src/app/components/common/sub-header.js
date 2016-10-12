import React from 'react';
import { IndexLink, Link } from 'react-router';

class NueSubHeader extends React.Component {
  render() {
    return(
      <div className="site-selector">
        <div className="site">
            <div className="site-logo"><i className="fa fa-industry"></i></div>
            <div className="site-name">
                <div className="sub-title">Hyderabad, HQ</div>
                <div className="title">Nuevosol Energy Pvt Ltd.</div>
            </div>
        </div>
        <div className="site-data">
            <div className="data">
                <div className="sub-title">Commisioned</div>
                <div className="title">124<span className="meta">MW</span></div>
            </div>
            <div className="data">
                <div className="sub-title">Trackers</div>
                <div className="title">6944<span className="meta"></span></div>
            </div>
            <div className="data">
                <div className="sub-title">Mounting Type</div>
                <div className="title">60<span className="meta">per row</span></div>
            </div>
            <div className="data">
                <div className="sub-title">Module capacity</div>
                <div className="title">300<span className="meta">Wp</span></div>
            </div>
            <div className="data">
                <div className="sub-title">Last Updated</div>
                <div className="title">Sep 14th 2016<span className="meta">12:05</span></div>
            </div>
        </div>
      </div>
    );
  }
}
export default NueSubHeader;
