import * as constants from '../constants';
// import _ from 'lodash';
import Firebase from 'firebase';

const goalsRef = new Firebase(constants.FIREBASE).child('history');

// const mapToHistory = (data) => {
// 	let history = {
// 		data: {},
// 		options: {
// 	    axisY: {
// 	      showLabel: false,
// 	      showGrid: false
// 	    },
// 	    axisX: {
// 	      showLabel: false,
// 	      showGrid: false
// 	    },
// 	    stackBars: true,
// 	    chartPadding: {
// 	      top: 0,
// 	      right: 0,
// 	      bottom: 0,
// 	      left: 0
// 	    }
// 	  },
// 		chartType: 'Bar'
// 	};
//
// 	const labels = _.uniq(data.map(item => ((new Date(item.created)).getWeek())));
// 	const limits = _.uniq(data.map(item => ((new Date(item.created)).getWeek())));
//
// 	Object.assign(history.data, {
// 		labels: labels,
// 		series: [
// 			Object.getOwnPropertyNames(data).map((key) => data[])
// 		]
// 	});
//
// 	return history;
// };

export const startListeningToHistory = () => (dispatch) => {
	goalsRef.on('value', (snapshot) => {
		var tmpData = [{
		  "data": {
		    "labels": [
		      "W1",
		      "W2",
		      "W3",
		      "W4",
		      "W5"
		    ],
		    "series": [
		      [
		        0,
		        1,
		        2,
		        3,
		        4,
		        5
		      ]
		    ]
		  },
		  "options": {
		    "high": 15,
		    "low": 0,
		    "axisY": {
		      "showLabel": false,
		      "showGrid": false
		    },
		    "axisX": {
		      "showLabel": false,
		      "showGrid": false
		    },
		    "showPoint": true,
		    "showArea": true,
		    "lineSmooth": true,
		    "chartPadding": {
		      "top": 0,
		      "right": 0,
		      "bottom": 0,
		      "left": 0
		    }
		  },
		  "chartType": "Bar"
		}];

		dispatch({
      type: constants.RECEIVE_HISTORY_DATA,
			data: tmpData
      // data: mapToHistory(snapshot.val())
    });
	});
};
