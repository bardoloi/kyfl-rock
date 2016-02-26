import React from 'react';
import { AppBar, FlatButton } from 'material-ui';

import AppBarContainer from '../containers/AppBarContainer.jsx';
import NotificationContainer from '../containers/NotificationContainer.jsx';

const App = ({ children }) => (
  <div>
      <AppBarContainer />
      { children }
      <NotificationContainer />
  </div>
);

export default App;
