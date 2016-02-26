import React from 'react';
import * as authConst from '../constants/authConstants';

// material-ui components
import FlatButton from 'material-ui/lib/flat-button';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Divider from 'material-ui/lib/divider';

const AppMainBar = ({ auth, logoutUser, attemptLogin }) => {
  let iconElementRight = null;

  switch (auth.currently) {
    case authConst.LOGGED_IN:
      iconElementRight = (
        <IconMenu
          iconButtonElement={ <IconButton><MoreVertIcon /></IconButton> }
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem primaryText={`Signed in as ` + auth.username} disabled />
          <Divider />
          <MenuItem primaryText={`Log out`} onTouchTap={ logoutUser } />
        </IconMenu>
      );
      break;

    case authConst.AWAITING_AUTH_RESPONSE:
      iconElementRight = (
        <FlatButton label={`authenticating...`} icon={ <i className="fa fa-spinner fa-spin"></i> } />
      );
      break;

    default:
      iconElementRight = (
        <FlatButton label={`Log in`} onClick={ attemptLogin } />
      );
      break;
  }

  return (
    <AppBar
      title={`KYFL-ROCK`}
      showMenuIconButton={false}
      iconElementRight={ iconElementRight }  />
  );
};

export default AppMainBar;
