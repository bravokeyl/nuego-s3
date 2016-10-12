import React, {PropTypes} from 'react';
import { IndexLink, Link } from 'react-router';

class NueDashMain extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="main">
        <div className="row">
          <div className="wrap">
            <section className="module flex-2">
              <div className="tracker-table">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Tracker</th>
                      <th>Tracker Angle</th>
                      <th>Sun Angle</th>
                      <th>Target Angle</th>
                      <th>Last Updated</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                  <tbody>
                    <tr>
                      <td>
                        <Link to="/trackers/NGT-AZP-Q1-001" activeClassName="active">NGT-1</Link>
                      </td>
                      <td>19.06</td>
                      <td>45.76</td>
                      <td>08.19</td>
                      <td>14-09-2016 12:05:21</td>
                      <td>Working properly</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="/trackers/NGT-AZP-Q1-002">NGT-2</a>
                      </td>
                      <td>19.06</td>
                      <td>45.76</td>
                      <td>08.19</td>
                      <td>14-09-2016 12:05:21</td>
                      <td>Working properly</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="/trackers/NGT-AZP-Q1-003">NGT-3</a>
                      </td>
                      <td>19.06</td>
                      <td>45.76</td>
                      <td>08.19</td>
                      <td>14-09-2016 12:05:21</td>
                      <td>Working properly</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="/trackers/NGT-AZP-Q1-004">NGT-4</a>
                      </td>
                      <td>19.06</td>
                      <td>45.76</td>
                      <td>08.19</td>
                      <td>14-09-2016 12:05:21</td>
                      <td>Working properly</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="/trackers/NGT-AZP-Q1-005">NGT-5</a>
                      </td>
                      <td>19.06</td>
                      <td>45.76</td>
                      <td>08.19</td>
                      <td>14-09-2016 12:05:21</td>
                      <td>Working properly</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="/trackers/NGT-AZP-Q1-006">NGT-6</a>
                      </td>
                      <td>19.06</td>
                      <td>45.76</td>
                      <td>08.19</td>
                      <td>14-09-2016 12:05:21</td>
                      <td>Working properly</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="/trackers/NGT-AZP-Q1-007">NGT-7</a>
                      </td>
                      <td>19.06</td>
                      <td>45.76</td>
                      <td>08.19</td>
                      <td>14-09-2016 12:05:21</td>
                      <td>Working properly</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            <section className="module flex-1">
              <header>
                <span className="title">Batteries</span>
                <span className="fa fa-gear"></span>
              </header>
              <div className="battery">
                <div className="flex data">
                  <span className="battery-title">NGB-AZP-S1-001</span>
                  <span className="battery-status">70% / Charging</span>
                </div>
                <div className="flex data">
                  <span className="battery-title">NGB-AZP-S1-002</span>
                  <span className="battery-status alert">20% / Draining</span>
                </div>
                <div className="flex data">
                  <span className="battery-title">NGB-AZP-S1-003</span>
                  <span className="battery-status">84% / Charging</span>
                </div>
                <div className="flex data">
                  <span className="battery-title">NGB-AZP-S1-004</span>
                  <span className="battery-status">48% / Charging</span>
                </div>
                <div className="flex data">
                  <span className="battery-title">NGB-AZP-S1-005</span>
                  <span className="battery-status">96% / Charging</span>
                </div>
                <div className="flex data">
                  <span className="battery-title">NGB-AZP-S1-006</span>
                  <span className="battery-status drain">48% / Draining</span>
                </div>
                <div className="flex data">
                  <span className="battery-title">NGB-AZP-S1-007</span>
                  <span className="battery-status">79% / Charging</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default NueDashMain;
