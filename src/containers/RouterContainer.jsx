import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import AppContainer from '../containers/AppContainer.jsx';
import DashboardContainer from '../containers/DashboardContainer.jsx';

const AppRoutes = () => (
  <Router history={ browserHistory }>
    <Route path="/" component={ AppContainer }>
      <IndexRoute component={ DashboardContainer } />
    </Route>
  </Router>
);

export default AppRoutes;
