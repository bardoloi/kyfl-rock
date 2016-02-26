import * as NotificationActions from '../constants/notificationConstants';
import initialState from '../utils/initialState';

export default function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case NotificationActions.RECEIVE_MESSAGE:
      return Object.assign({}, state, action.payload);

    default:
        return state;
  }
}
