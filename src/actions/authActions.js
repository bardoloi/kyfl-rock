import * as constants from '../constants';
import Firebase from 'firebase';

const fireRef = new Firebase(constants.FIREBASE);

export const startListeningToAuth = () => (dispatch, getState) => {
  fireRef.onAuth(function(authData) {
    if (authData) {
      dispatch({
        type: constants.LOGIN_USER,
        uid: authData.uid,
        username: authData.google.displayName || authData.google.username
      });
    } else if (getState().auth.currently !== constants.ANONYMOUS) {
      dispatch({ type: constants.LOGOUT });
    }
  });
};

export const attemptLogin = () => (dispatch, getState) => {
  dispatch({ type: constants.ATTEMPTING_LOGIN });
  fireRef.authWithOAuthPopup('google', function(error, authData) {
    if (error) {
      dispatch({ type: constants.DISPLAY_ERROR, error: 'Login failed! ' + error });
      dispatch({ type: constants.LOGOUT });
    }
  });
};

export const logoutUser = () => (dispatch, getState) => {
  dispatch({ type: constants.LOGOUT });
  fireRef.unauth();
};
