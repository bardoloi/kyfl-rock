import {combineReducers} from 'redux';

// custom reducers
import auth from '../reducers/authReducer';
import notification from '../reducers/notificationReducer';
import widgetList from '../reducers/widgetListReducer';

const rootReducer = combineReducers({
  auth,
  notification,
  widgetList
});

export default rootReducer;
