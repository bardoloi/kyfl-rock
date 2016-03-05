import * as constants from '../constants';
import Firebase from 'firebase';

const goalsRef = new Firebase(constants.FIREBASE).child('goals');
const historyRef = new Firebase(constants.FIREBASE).child('history');

const setHistory = (action, key, state) => {
  const widget = state.widgetList[key];
  const currDate = new Date();
  const newRef = historyRef.child(key);
  newRef.push({
    createdBy: state.auth.username,
    currentLimit: widget.limit,
    currentValue: action.INCREASE_WIDGET_VALUE
      ? (widget.value + 1)
      : (widget.value > 0 ? widget.value - 1 : widget.value),
    previousValue: widget.value,
    created: currDate.toISOString(),
    week: currDate.getWeek()
  });
};

export const decreaseWidgetValue = (key) => (dispatch, getState) => {
  goalsRef.child(key).transaction((data) => {
    data.value = data.value > 0 ? data.value - 1 : data.value;
    return data;
  }, (error) => {
    if (error) {
      console.log('Firebase transaction failed abnormally!', error);
    } else {
      setHistory(constants.DECREASE_WIDGET_VALUE, key, getState());
    }
  });
};

export const increaseWidgetValue = (key) => (dispatch, getState) => {
  goalsRef.child(key).transaction((data) => {
    data.value = data.value + 1;
    return data;
  }, (error) => {
    if (error) {
      console.log('Firebase transaction failed abnormally!', error);
    } else {
      setHistory(constants.INCREASE_WIDGET_VALUE, key, getState());
    }
  });
};

export const startListeningToWidgetList = () => (dispatch) => {
	goalsRef.on('value', (snapshot) => {
		dispatch({
      type: constants.RECEIVE_WIDGETLIST_DATA,
      data: snapshot.val()
    });
	});
};
