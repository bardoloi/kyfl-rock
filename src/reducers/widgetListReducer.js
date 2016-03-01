import * as constants from '../constants';
import initialState from '../utils/initialState';

const widgetListReducer = (state = initialState.widgetList, action) => {
  switch (action.type) {
    case constants.INCREASE_WIDGET_VALUE:
      return Object.getOwnPropertyNames(state).map(key => widgetReducer(state[key], action));

    case constants.DECREASE_WIDGET_VALUE:
      return Object.getOwnPropertyNames(state).map(key => widgetReducer(state[key], action));

    case constants.RECEIVE_WIDGETLIST_DATA:
      return Object.assign({}, state, action.data);

    default:
        return state;
  }
};

export default widgetListReducer;
