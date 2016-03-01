import * as constants from '../constants';
import initialState from '../utils/initialState';

const notificationReducer = (state = initialState.notification, action) => {
  switch (action.type) {
    case constants.RECEIVE_MESSAGE:
      return Object.assign({}, state, {
        title: action.title,
        msg: action.msg,
        msgType: action.msgType
      });

    default:
        return state;
  }
};

export default notificationReducer;
