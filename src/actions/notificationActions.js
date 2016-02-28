import * as constants from '../constants';

export const displayNotification = (title, message) => {
  return {
    type: constants.RECEIVE_MESSAGE,
    payload: Object.assign({}, {
      title: title,
      message: message
    })
  }
};
