import React from 'react';
import {connect} from 'react-redux';
import * as widgetListActions from '../actions/widgetListActions';
import DashboardWidgetList from '../components/DashboardWidgetList.jsx';

const mapStateToProps = (state) => {
  return {
    widgetList: state.widgetList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDecrease: (id) => dispatch(widgetListActions.decreaseWidgetValue(id)),
    onIncrease: (id) => dispatch(widgetListActions.increaseWidgetValue(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardWidgetList);
