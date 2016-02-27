import * as authConst from '../constants/authConstants';
import initialState from '../utils/initialState';

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case authConst.ATTEMPTING_LOGIN:
      return {
        currently: authConst.AWAITING_AUTH_RESPONSE,
        username: 'guest',
        uid: null
      };

    case authConst.LOGOUT:
      return {
        currently: authConst.ANONYMOUS,
        username: 'guest',
        uid: null
      };

    case authConst.LOGIN_USER:
      return {
        currently: authConst.LOGGED_IN,
        username: action.username,
        uid: action.uid
      };

    default:
        return state;
  }
}
