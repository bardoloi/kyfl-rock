import React from 'react';
import '../scss/widget-list.scss';

import Widget from '../components/Widget.jsx';

const WidgetList = ({ widgetList, onIncrease, onDecrease, allowEdit }) => {
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
    </div>
  );
};

export default WidgetList;
