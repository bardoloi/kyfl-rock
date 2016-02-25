import { RECEIVE_MESSAGE } from '../constants/notificationConstants';

const initialState = {
  message: '',
  title: ''
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_MESSAGE:
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }
};

export default notificationReducer;
