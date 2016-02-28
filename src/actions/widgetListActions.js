import * as constants from '../constants';
import Firebase from 'firebase';

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
    data.value = data.value < data.limit ? data.value + 1 : data.value;
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
	});
};
