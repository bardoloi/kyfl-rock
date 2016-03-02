import {combineReducers} from 'redux';

// custom reducers
import auth from '../reducers/authReducer';
import notification from '../reducers/notificationReducer';
import widgetList from '../reducers/widgetListReducer';
import historyChart from '../reducers/chartReducer';

const rootReducer = combineReducers({
  auth,
  notification,
  widgetList,
  historyChart
});

export default rootReducer;
