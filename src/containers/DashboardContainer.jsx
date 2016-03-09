// misc
import React from 'react';
import {connect} from 'react-redux';

// app specific
import '../scss/dashboard.scss';
import * as widgetListActions from '../actions/widgetListActions';
import * as goalActions from '../actions/goalActions';
import WidgetList from '../components/WidgetList.jsx';
import ManageGoal from '../components/ManageGoal.jsx';

// material-ui
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';

const mapStateToProps = (state) => {
  return {
    allowEdit: state.auth.uid,
    widgetList: state.widgetList,
    manageGoal: state.manageGoal
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDecrease: (id) => dispatch(widgetListActions.decreaseWidgetValue(id)),
    onIncrease: (id) => dispatch(widgetListActions.increaseWidgetValue(id)),
    onTakeOwnership: (id) => dispatch(widgetListActions.takeOwnership(id)),
    handleShowManageGoal: () => dispatch(goalActions.show()),
    handleCancelManageGoal: () => dispatch(goalActions.cancel()),
    handleSaveManageGoal: () => {}
  };
};

const DashboardContainer = (props) => {
  const addAction = props.allowEdit
    ? (
      <div className="animated bounce action-add">
        <FloatingActionButton
          onClick={props.handleShowManageGoal}
        >
          <ContentAdd />
        </FloatingActionButton>
      </div>
    )
    : null;

  return (
    <div>
      {addAction}
      <WidgetList
        allowEdit={props.allowEdit}
        widgetList={props.widgetList}
      />
      <ManageGoal
        isVisible={props.manageGoal.isVisible}
        model={props.manageGoal.model}
        handleCancel={props.handleCancelManageGoal}
        handleSave={props.handleSaveManageGoal}
      />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
