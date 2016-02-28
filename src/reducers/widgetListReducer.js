import * as constants from '../constants';

const widgetReducer = (state, action) => {
  if (state.id !== action.id) {
    return state;
  }

  switch (action.type) {
    case constants.INCREASE_WIDGET_VALUE:
      if (state.value < state.limit) {
        return Object.assign({}, state, { value: state.value + 1 });
      } else {
        return state;
      }

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

    default:
        return state;
  }
};

export default widgetListReducer;
