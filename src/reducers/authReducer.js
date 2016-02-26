import {
  ATTEMPTING_LOGIN,
  LOGOUT,
  LOGIN_USER,
  AWAITING_AUTH_RESPONSE,
  ANONYMOUS,
  LOGGED_IN
} from '../constants/authConstants';
import initialState from '../utils/initialState';

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case ATTEMPTING_LOGIN:
      return {
        currently: AWAITING_AUTH_RESPONSE,
        username: 'guest',
        uid: null
      };

    case LOGOUT:
      return {
        currently: ANONYMOUS,
        username: 'guest',
        uid: null
      };

    case LOGIN_USER:
      return {
        currently: LOGGED_IN,
        username: action.username,
        uid: action.uid
      };

    default:
        return state;
  }
}
