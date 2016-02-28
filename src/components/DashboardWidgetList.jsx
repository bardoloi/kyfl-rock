import React from 'react';
import '../scss/dashboard.scss';

import DashboardWidget from '../components/DashboardWidget.jsx';

const DashboardWidgetList = ({ widgetList, onIncrease, onDecrease }) => {
  const properties = Object.getOwnPropertyNames(widgetList);

  return (
    <div className="dashboard-wrapper">
      {properties.map((key) => (
        <DashboardWidget
          key={key}
          onDecrease={onDecrease}
          onIncrease={onIncrease}
          widgetData={widgetList[key]}
        />
      ))}
    </div>
  );
};

export default DashboardWidgetList;
