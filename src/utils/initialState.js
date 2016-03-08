import * as constants from '../constants';

export default {
  auth: {
    currently: constants.ANONYMOUS,
    displayName: 'guest',
    uid: null,
    email: null,
    imageURL: null
  },
  notification: {
    msg: null,
    title: null,
    msgType: constants.INFO
  },
  widgetList: {}
};
