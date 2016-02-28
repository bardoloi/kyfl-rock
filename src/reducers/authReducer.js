import * as constants from '../constants';
import initialState from '../utils/initialState';

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.ATTEMPTING_LOGIN:
      return {
        currently: constants.AWAITING_AUTH_RESPONSE,
        username: 'guest',
        uid: null
      };

    case constants.LOGOUT:
      return {
        currently: constants.ANONYMOUS,
        username: 'guest',
        uid: null
      };

    case constants.LOGIN_USER:
      return {
        currently: constants.LOGGED_IN,
        username: action.username,
        uid: action.uid
      };

    default:
        return state;
  }
};

export default authReducer;
