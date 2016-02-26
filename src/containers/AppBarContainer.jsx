import React from 'react';
import { connect } from 'react-redux';
import * as authConst from '../constants/authConstants';
import { attemptLogin, logoutUser } from '../actions/authActions';
import AppMainBar from '../components/AppMainBar.jsx';

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: () => { dispatch(attemptLogin()); },
    logoutUser: () => { dispatch(logoutUser()); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppMainBar);
