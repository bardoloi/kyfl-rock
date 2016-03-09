import * as constants from '../constants';

export const show = () => {
  return {
    type: constants.MANAGE_GOAL_SHOW
  };
};

export const cancel = () => {
  return {
    type: constants.MANAGE_GOAL_CANCEL
  };
};

export const save = () => {
  return {
    type: constants.MANAGE_GOAL_SAVE
  };
};

export const close = () => {
  return {
    type: constants.MANAGE_GOAL_CLOSE
  };
};
