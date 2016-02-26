import { combineReducers } from 'redux';
import auth from '../reducers/authReducer';
import notification from '../reducers/notificationReducer';

const rootReducer = combineReducers({
  auth,
  notification
});

export default rootReducer;
