import React from 'react';
import {connect} from 'react-redux';
import * as authActions from '../actions/authActions';
import * as notificationActions from '../actions/notificationActions';
import AppMainBar from '../components/AppMainBar.jsx';

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: () => { dispatch(authActions.attemptLogin()); },
    logoutUser: () => { dispatch(authActions.logoutUser()); },
    onLoginSuccess: () => { dispatch(notificationActions.displayNotification(`Notification`, `Successfully signed in!`));  },
    onLogoutSuccess: () => { dispatch(notificationActions.displayNotification(`Notification`, `Successfully signed out!`));  }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppMainBar);
