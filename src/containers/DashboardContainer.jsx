import React from 'react';
import {connect} from 'react-redux';
import * as widgetListActions from '../actions/widgetListActions';
import WidgetList from '../components/WidgetList.jsx';

const mapStateToProps = (state) => {
  return {
    allowEdit: state.auth.uid,
    widgetList: state.widgetList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDecrease: (id) => dispatch(widgetListActions.decreaseWidgetValue(id)),
    onIncrease: (id) => dispatch(widgetListActions.increaseWidgetValue(id)),
    onTakeOwnership: (id) => dispatch(widgetListActions.takeOwnership(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WidgetList);
