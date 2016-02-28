// libraries
import React from 'react';

// containers
import AppBarContainer from '../containers/AppBarContainer.jsx';
import DashboardContainer from '../containers/DashboardContainer.jsx';
import NotificationContainer from '../containers/NotificationContainer.jsx';

const App = () => (
  <div>
    <AppBarContainer />
    <DashboardContainer />
    <NotificationContainer />
  </div>
);

export default App;
