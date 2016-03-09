// misc
import React from 'react';

// ui-library
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';

const ManageGoal = ({isVisible, model, handleCancel, handleSave, handleClose}) => {
  const actions = [
    <FlatButton
      label="Cancel"
      secondary={true}
      onTouchTap={handleCancel}
    />,
    <FlatButton
      label="Save"
      primary={true}
      keyboardFocused={true}
      onTouchTap={handleSave}
    />,
  ];

  return (
    <Dialog
      title={(model ? `Update` : `Add`) + ` Goal` + (model ? ` - ` + model.title : ``)}
      actions={actions}
      modal
      open={isVisible}
      onRequestClose={handleClose}
    >
      {`TODO: FORM WILL RENDER HERE!`}
    </Dialog>
  );
};

export default ManageGoal;
