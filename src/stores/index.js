import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import initialState from '../utils/initialState';

const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
  const createLogger = require(`redux-logger`);
  const logger = createLogger();
  middlewares.push(logger);
}

export default applyMiddleware(...middlewares)(createStore)(rootReducer, initialState);
