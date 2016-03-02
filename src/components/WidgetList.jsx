import React from 'react';
import '../scss/widget-list.scss';

import Widget from '../components/Widget.jsx';
import Chart from '../components/Chart.jsx';

const WidgetList = ({ widgetList, onIncrease, onDecrease, allowEdit, historyChart }) => {
  const properties = Object.getOwnPropertyNames(widgetList);

  return (
    <div className="dashboard-wrapper">
      {properties.map((key) => (
        <Widget
          allowEdit={allowEdit}
          key={key}
          onDecrease={() => onDecrease(key)}
          onIncrease={() => onIncrease(key)}
          widgetData={widgetList[key]}
        />
      ))}
      <Chart chartData={historyChart} />
    </div>
  );
};

export default WidgetList;
