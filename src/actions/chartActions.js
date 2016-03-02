import * as constants from '../constants';

export const receiveChartData = (data, options, chartType) => {
  return {
    type: constants.RECEIVE_CHART_DATA,
    data: data,
    options: options,
    chartType: chartType
  };
};
