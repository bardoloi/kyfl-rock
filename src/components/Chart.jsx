import React from 'react';
import ChartistGraph from 'react-chartist';
import '../scss/chart.scss'

// material-ui components
import Card from 'material-ui/lib/card/card';

const Chart = ({chartData}) => (
  <div className="chart-widget">
    <ChartistGraph data={chartData.data} options={chartData.options} type={chartData.chartType} />
  </div>
);

export default Chart;
