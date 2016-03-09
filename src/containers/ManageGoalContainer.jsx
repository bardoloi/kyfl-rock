import React from 'react';
import {connect} from 'react-redux';

import ManageGoal from '../components/ManageGoal.jsx';

const mapStateToProps = (state) => {
  isVisible: state.manageGoal.isVisible,
  model: state.manageGoal.model
};

const mapDispatchToProps = () => {
  return {
    handleCancel: () => { dispatch(goalActions.cancel()); },
    handleSave: () => { dispatch(goalActions.save()); },
    handleClose: () => { dispatch(goalActions.close()); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageGoal);
