import { combineReducers } from 'redux';
import auth from '../reducers/authReducer';
import notification from '../reducers/notificationReducer';
import dashboard from '../reducers/dashboardReducer';

const rootReducer = combineReducers({
  auth,
  notification,
  dashboard
});

export default rootReducer;
