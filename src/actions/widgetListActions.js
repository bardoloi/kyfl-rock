import * as constants from '../constants';

export const decreaseWidgetValue = (id) => {
  return {
    type: constants.DECREASE_WIDGET_VALUE,
    id
  }
};

export const increaseWidgetValue = (id) => {
  return {
    type: constants.INCREASE_WIDGET_VALUE,
    id
  }
};
