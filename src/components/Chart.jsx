import React from 'react';
import ChartistGraph from 'react-chartist';

// material-ui components
import Card from 'material-ui/lib/card/card';

var data = {
  labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
  series: [
    [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
  ]
};

var options = {
  high: 10,
  low: -10,
  axisX: {
    labelInterpolationFnc: function(value, index) {
      return index % 2 === 0 ? value : null;
    }
  }
};

var type = 'Bar'


const Chart = ({chartData}) => (
  <div style={{width:'100%', height: '300px'}}>
    <ChartistGraph data={data} options={options} type={type} />
  </div>
);

export default Chart;
