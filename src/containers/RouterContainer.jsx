import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from '../containers/App.jsx';

const AppRoutes = () => (
  <Router history={ browserHistory }>
    <Route path="/" component={ App }></Route>
  </Router>
);

export default AppRoutes;
