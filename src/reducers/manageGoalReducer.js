import * as constants from '../constants';
import initialState from '../utils/initialState';

const manageGoalReducer = (state = initialState.manageGoal, action) => {
  switch (action.type) {
    case constants.MANAGE_GOAL_SHOW:
      return Object.assign({}, state, {
        isVisible: true
      });

    case constants.MANAGE_GOAL_CANCEL:
      return Object.assign({}, initialState.manageGoal);

    default:
      return state;
  }
};

export default manageGoalReducer;
