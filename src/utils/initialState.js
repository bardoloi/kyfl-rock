import * as constants from '../constants';

export default {
  auth: {
    currently: constants.ANONYMOUS,
    username: null,
    uid: null
  },
  notification: {
    msg: null,
    title: null,
    msgType: constants.INFO
  },
  widgetList: {},
  historyChart: {
    data: {
      labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
      series: [
        [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
      ]
    },
    options: {
      high: 10,
      low: -10,
      axisX: {
        labelInterpolationFnc: function(value, index) {
          return index % 2 === 0 ? value : null;
        }
      }
    },
    chartType: 'Bar'
  }
};
