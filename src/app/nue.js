import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes.js';
import NueGo from './components/app';

import '../www/fonts/font-awesome/css/font-awesome.css';
import '../www/styles/nuevo.css';

render(
  <Router history={browserHistory} routes={routes} />, document.getElementById('nuego')
);
