import * as constants from '../constants';
import * as notificationActions from '../actions/notificationActions';
import * as usersActions from '../actions/usersActions';
import Firebase from 'firebase';

const fireRef = new Firebase(constants.FIREBASE);

export const startListeningToAuth = () => (dispatch, getState) => {
  fireRef.onAuth((authData) => {
    if (authData) {
      if(authData.provider === 'google' && authData.google && authData.google.email.toLowerCase().match(new RegExp(constants.VALID_DOMAIN, 'i'))) {
        const auth = {
          type: constants.LOGIN_USER,
          uid: authData.uid,
          displayName: authData.google.displayName || authData.google.username,
          email: authData.google.email,
          imageURL: authData.google.profileImageURL
        };

        dispatch(auth);
        usersActions.registerUser(auth);
        dispatch(notificationActions.success(`Welcome, \n` + auth.displayName + `!`));
      } else {

        dispatch({ type: constants.LOGOUT });
        fireRef.unauth();
        dispatch(notificationActions.warning(`Sorry, but your domain is not permitted!`));
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
  dispatch(notificationActions.success(`See you soon!`));
};
