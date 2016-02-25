import { RECEIVE_MESSAGE } from '../constants/notificationConstants';

export const displayNotification = (title, message) => {
  return {
    type: RECEIVE_MESSAGE,
    payload: Object.assign({ }, { title, message })
  };
};
