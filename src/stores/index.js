import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import initialState from '../utils/initialState';

// A super-simple logger
var logger = store => next => action => {
	console.log('\n=====================');
	console.log('Dispatching', action.type,action);
	var result = next(action);
	console.log('next state', store.getState());
	console.log('=====================');
	return result;
}

export default applyMiddleware(thunk, logger)(createStore)(rootReducer, initialState);
