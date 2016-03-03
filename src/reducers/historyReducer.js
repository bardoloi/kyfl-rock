import * as constants from '../constants';
import initialState from '../utils/initialState';

const historyReducer = (state = initialState.history, action) => {
  switch (action.type) {
    case constants.RECEIVE_HISTORY_DATA:
      return Object.assign({}, state, action.data);

    default:
        return state;
  }
};

export default historyReducer;
