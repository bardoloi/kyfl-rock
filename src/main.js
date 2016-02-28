// misc
import 'file?name=[name].[ext]!./index.html';
import 'babel-polyfill';
import 'fastclick';
import 'font-awesome-sass-loader';
import './scss/main.scss';

// linbraries and tools
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

// store
import store from './stores';

// actions
import * as authActions from './actions/authActions';

// components
import AppContainer from './containers/AppContainer.jsx';

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);

// on load start listening to authorization actions
setTimeout(function(){
    store.dispatch(authActions.startListeningToAuth());
});
