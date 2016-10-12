import React from 'react';
import { Route, IndexRoute } from 'react-router';
import NueGo from './components/app';
import NueDashboard from './components/tracker/dashboard';
import NueTracker from './components/tracker/tracker';
import NueLogs from './components/logs';
import NueAuth from './components/common/auth';


const routes = (
  <Route path="/" component={NueGo}>
    <Route path="trackers" component={NueDashboard} />
    <Route path="trackers/:id" component={NueTracker} />
    <Route path="logs" component={NueLogs} />
  </Route>
);

export default routes;
