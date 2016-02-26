import React from 'react';
import {AppBar} from 'material-ui';

import DashboardContainer from '../containers/DashboardContainer.jsx';
import NotificationContainer from '../containers/NotificationContainer.jsx';

const App = () => (
  <div>
    <AppBar title={`KYFL ROCK`} showMenuIconButton={false}  />
    <DashboardContainer />
    <NotificationContainer />
  </div>
);

export default App;
