import 'file?name=[name].[ext]!./index.html';
import 'babel-polyfill';
import 'fastclick';
import 'font-awesome-sass-loader';
import './scss/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import store from './stores';
import { startListeningToAuth } from './actions/authActions';
import RouterContainer from './containers/RouterContainer.jsx';

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={ store }>
    <RouterContainer />
  </Provider>,
  document.getElementById('container')
);

setTimeout(function(){
    store.dispatch(startListeningToAuth());
});
