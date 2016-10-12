import React, {PropTypes} from 'react';

class NueTrackerDetail extends React.Component {
  constructor(props,context) {
      super(props,context);
  }
  render() {
    return(
      <div className="main">
        <div className="row">
            <div className="wrap">
                <section className="module flex-3">
                    <header><span className="title">Tracker Monitoring</span><span className="fa fa-gear"></span></header>
                    <div id="chart"></div>
                </section>
                <section className="module flex-1">
                    <header><span className="title">Battery Info</span><span className="fa fa-gear"></span></header>
                    <div className="battery">
                        <div className="flex data"><span>Battery Status</span><span>Charging</span></div>
                        <div className="flex data"><span>Voltage</span><span>24.4 V</span></div>
                        <div className="flex data"><span>Level</span><span>70%</span></div>
                        <div className="flex data"><span>Temperature</span><span>26.7°C</span></div>
                        <div className="flex data"><span>Capacity</span><span>15 Ah</span></div>
                    </div>
                </section>
            </div>
        </div>
        <div className="row">
            <div className="wrap">
                <section className="module flex-3">
                    <header><span className="title">Tracker Data</span><span className="fa fa-gear"></span></header>
                    <div className="tracker-table">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Tracker Angle</th>
                                    <th>Sun Angle</th>
                                    <th>Target Angle</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody></tbody>
                            <tbody><tr>
                                <td>19.06</td>
                                <td>45.76</td>
                                <td>08.19</td>
                                <td>September 14th 2016</td>
                                <td>12:11:33</td>
                            </tr>
                            <tr>
                                <td>19.06</td>
                                <td>45.76</td>
                                <td>08.19</td>
                                <td>September 14th 2016</td>
                                <td>12:11:33</td>
                            </tr>
                            <tr>
                                <td>19.06</td>
                                <td>45.76</td>
                                <td>08.19</td>
                                <td>September 14th 2016</td>
                                <td>12:11:33</td>
                            </tr>
                            <tr>
                                <td>19.06</td>
                                <td>45.76</td>
                                <td>08.19</td>
                                <td>September 14th 2016</td>
                                <td>12:11:33</td>
                            </tr>
                            <tr>
                                <td>19.06</td>
                                <td>45.76</td>
                                <td>08.19</td>
                                <td>September 14th 2016</td>
                                <td>12:11:33</td>
                            </tr>
                            <tr>
                                <td>19.06</td>
                                <td>45.76</td>
                                <td>08.19</td>
                                <td>September 14th 2016</td>
                                <td>12:11:33</td>
                            </tr>
                        </tbody></table>
                    </div>
                </section>
                <section className="module flex-1">
                    <header><span className="title">Activity</span><span className="fa fa-gear"></span></header>
                    <div>
                        <div className="activity-row">
                            <div className="header">
                                <div className="title">Motor stopped</div><span className="time"> just now</span></div>
                            <div className="sub-title">Motor successfully stopped</div>
                        </div>
                        <div className="activity-row">
                            <div className="header"><span className="title">Tracker</span><span className="time"> 1 min ago</span></div>
                            <div className="sub-title">Target angle acheived</div>
                        </div>
                        <div className="activity-row">
                            <div className="header"><span className="title">Tracker Traget</span><span className="time"> 5 min ago</span></div>
                            <div className="sub-title">Tracker angle is being set to target angle</div>
                        </div>
                        <div className="activity-row">
                            <div className="header"><span className="title">Battery Discharging</span><span className="time"> 14 min ago</span></div><span className="sub-title">Battery is discharging now</span></div>
                        <div className="activity-row">
                            <div className="header"><span className="title">Motor started</span><span className="time"> 15 min ago</span></div>
                            <div className="sub-title">Motor successfully started</div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
    );
  }
}

export default NueTrackerDetail;
