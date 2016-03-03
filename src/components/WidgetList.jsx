import React from 'react';
import '../scss/widget-list.scss';

import Widget from '../components/Widget.jsx';

const WidgetList = ({ widgetList, onIncrease, onDecrease, allowEdit, history }) => {
  const properties = Object.getOwnPropertyNames(widgetList);

  return (
    <div className="widget-list-wrapper">
      {properties.map((key) => (
        <Widget
          allowEdit={allowEdit}
          key={key}
          onDecrease={() => onDecrease(key)}
          onIncrease={() => onIncrease(key)}
          widgetData={widgetList[key]}
          chartData={history[key]}
        />
      ))}
    </div>
  );
};

export default WidgetList;
