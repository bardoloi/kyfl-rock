import React from 'react';
import {connect} from 'react-redux';

import DashboardWidgetList from '../components/DashboardWidgetList.jsx';

const mapStateToProps = (state) => {
  return {
    widgetList: state.widgetList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardWidgetList);
