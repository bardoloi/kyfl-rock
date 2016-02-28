import React from 'react';
import '../scss/dashboard.scss';

import DashboardWidget from '../components/DashboardWidget.jsx';

const DashboardWidgetList = ({ widgetList, onIncrease, onDecrease, allowEdit }) => {
  const properties = Object.getOwnPropertyNames(widgetList);

  return (
    <div className="dashboard-wrapper">
      {properties.map((key) => (
        <DashboardWidget
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

export default DashboardWidgetList;
