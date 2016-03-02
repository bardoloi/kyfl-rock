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
      labels: ['W1', 'W2', 'W3', 'W4', 'W5'],
      series: [
        [0, 1, 2, 3, 4, 0]
      ]
    },
    options: {
      high: 10,
      low: 0,
      axisY: {
        showLabel: false,
        showGrid: false
      },
      axisX: {
        showLabel: false,
        showGrid: false
      },
      showPoint: true,
      showArea: true,
      lineSmooth: true,
      chartPadding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },
    chartType: 'Line'
  }
};
