import * as constants from '../constants';

const widgetReducer = (state, action) => {
  switch (action.type) {
    case constants.INCREASE_WIDGET_VALUE:
      debugger;
      return Object.assign({}, state, { value: state.value + 1 });

    case constants.DECREASE_WIDGET_VALUE:
      if (state.value > 0) {
        return Object.assign({}, state, { value: state.value - 1 });
      } else {
        return state;
      }

    default:
      return state;
  }
};

const widgetListReducer = (state = [], action) => {
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
