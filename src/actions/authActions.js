import * as constants from '../constants';
import * as notificationActions from '../actions/notificationActions';
import Firebase from 'firebase';

const fireRef = new Firebase(constants.FIREBASE);

export const startListeningToAuth = () => (dispatch, getState) => {
  fireRef.onAuth((authData) => {
    if (authData) {
      if(authData.provider === 'google' && authData.google && authData.google.email.toLowerCase().match(new RegExp(constants.VALID_DOMAIN, 'i'))) {
        dispatch({
          type: constants.LOGIN_USER,
          uid: authData.uid,
          username: authData.google.displayName || authData.google.username
        });

        dispatch(notificationActions.success(`Successfully signed in!`));
      } else {

        dispatch({ type: constants.LOGOUT });
        fireRef.unauth();
        dispatch(notificationActions.warning(`Your domain is not permitted!`));
      }

    } else if (getState().auth.currently !== constants.ANONYMOUS) {
      dispatch({ type: constants.LOGOUT });
    }

  });
};

export const attemptLogin = () => (dispatch, getState) => {
  dispatch({ type: constants.ATTEMPTING_LOGIN });
  fireRef.authWithOAuthPopup('google', (error, authData) => {
    if (error) {
      dispatch(notificationActions.error(`Login failed! ` + error));
      dispatch({ type: constants.LOGOUT });
    }
  }, {
    scope: 'email'
  });
};

export const logoutUser = () => (dispatch, getState) => {
  dispatch({ type: constants.LOGOUT });
  fireRef.unauth();
  dispatch(notificationActions.success(`Successfully signed out!`));
};
