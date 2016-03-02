import * as constants from '../constants';

const chartReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.RECEIVE_CHART_DATA:
      return Object.assign({}, state, {
        data: action.data,
        options: action.options,
        chartType: action.chartType
      });

    default:
        return state;
  }
};

export default chartReducer;
