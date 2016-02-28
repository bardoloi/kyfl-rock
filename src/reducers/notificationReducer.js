import * as constants from '../constants';
import initialState from '../utils/initialState';

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.RECEIVE_MESSAGE:
      return Object.assign({}, state, action.payload);

    default:
        return state;
  }
};

export default notificationReducer;
