import * as constants from '../constants';

const displayNotification = (title, msg, msgType) => {
  return {
    type: constants.RECEIVE_MESSAGE,
    title: title,
    msg: msg,
    msgType: msgType
  }
};

export const success = (msg) => displayNotification(`Success`, msg, constants.SUCCESS);
export const info = (msg) => displayNotification(`Info`, msg, constants.INFO);
export const warning = (msg) => displayNotification(`Warning`, msg, constants.WARNING);
export const error = (msg) => displayNotification(`Error`, msg, constants.ERROR);
