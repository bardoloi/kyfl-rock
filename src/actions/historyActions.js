import * as constants from '../constants';
import _ from 'lodash';
import Firebase from 'firebase';

const historyRef = new Firebase(constants.FIREBASE).child('history');

const getDefaultChartOptions = () => {
	return {
		data: {},
		options: {
			axisY: {
				showLabel: false,
				showGrid: false
			},
			axisX: {
				showLabel: false,
				showGrid: false
			},
			stackBars: true,
			chartPadding: {
				top: 0,
				right: 0,
				bottom: 0,
				left: 0
			}
		},
		chartType: 'Bar'
	};
};

const mapToHistory = (data) => {
	let history = Object.assign(getDefaultChartOptions(), { data: {}});

	// determine week number from created date
	const iteration0 = Object.getOwnPropertyNames(data).map(key => {
		const item = data[key];
		const tmpDate = new Date(item.created);
		return {
			created: new Date(item.created),
			label: 'W' + tmpDate.getWeek(),
			limit: item.currentLimit,
			value: item.currentValue
		}
	});

	// group by week
	const iteration1 = _.groupBy(iteration0, 'label');
	const labels = Object.getOwnPropertyNames(iteration1);
	const mostRecentEntries = labels.map(key => _.maxBy(iteration1[key], 'created'));
	const limits = mostRecentEntries.map(item => item.limit);
	const values = mostRecentEntries.map(item => item.value);

	// fills history data for chart
	Object.assign(history.data, {
		labels: labels,
		series: [limits, values]
	});

	return history;
};

export const startListeningToHistory = () => (dispatch) => {
	historyRef.on('value', (snapshot) => {
		const serverData = snapshot.val();
		const keys = Object.getOwnPropertyNames(serverData);
		let data = {};
		keys.forEach(key => {
			data[key] = mapToHistory(serverData[key]);
		});
		dispatch({
      type: constants.RECEIVE_HISTORY_DATA,
      data: data
    });
	});
};
