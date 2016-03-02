import * as constants from '../constants';
import * as chartActions from '../actions/chartActions';
import Firebase from 'firebase';
import initialState from '../utils/initialState';

const goalsRef = new Firebase(constants.FIREBASE).child('goals');

export const decreaseWidgetValue = (key) => () => {
  goalsRef.child(key).transaction((data) => {
    data.value = data.value > 0 ? data.value - 1 : data.value;
    return data;

  }, (error) => {
    if (error) {
      console.log('Firebase transaction failed abnormally!', error);
    }
  });
};

export const increaseWidgetValue = (key) => () => {
  goalsRef.child(key).transaction((data) => {
    data.value = data.value + 1;
    return data;

  }, (error) => {
    if (error) {
      console.log('Firebase transaction failed abnormally!', error);
    }
  });
};

export const startListeningToWidgetList = () => (dispatch) => {
	goalsRef.on('value', (snapshot) => {
		dispatch({
      type: constants.RECEIVE_WIDGETLIST_DATA,
      data: snapshot.val()
    });
    dispatch(chartActions.receiveChartData(
      initialState.historyChart.data,
      initialState.historyChart.options,
      initialState.historyChart.chartType
    ));
	});
};
