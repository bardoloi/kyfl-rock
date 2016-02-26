import * as authConst from '../constants/authConstants';
import Firebase from 'firebase';

const fireRef = new Firebase(authConst.FIREBASE);

export const startListeningToAuth = () => (dispatch, getState) => {
  fireRef.onAuth(function(authData) {
    if (authData) {
      dispatch({
        type: authConst.LOGIN_USER,
        uid: authData.uid,
        username: authData.google.displayName || authData.google.username
      });
    } else if (getState().auth.currently !== authConst.ANONYMOUS) {
      dispatch({ type: authConst.LOGOUT });
    }
  });
};

export const attemptLogin = () => (dispatch, getState) => {
  dispatch({ type: authConst.ATTEMPTING_LOGIN });
  fireRef.authWithOAuthPopup('google', function(error, authData) {
    if (error) {
      dispatch({ type: authConst.DISPLAY_ERROR, error: 'Login failed! ' + error });
      dispatch({ type: authConst.LOGOUT });
    }
  });
};

export const logoutUser = () => (dispatch, getState) => {
  dispatch({ type: authConst.LOGOUT });
  fireRef.unauth();
};
