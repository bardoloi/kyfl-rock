import React from 'react';
import { connect } from 'react-redux';
import '../scss/dashboard.scss';

// material-ui components
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import Avatar from 'material-ui/lib/avatar';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import IconButton from 'material-ui/lib/icon-button';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import Divider from 'material-ui/lib/divider';
import FontIcon from 'material-ui/lib/font-icon';

const DashboardContainer = ({ dashboard }) => {
  const goals = Object.getOwnPropertyNames(dashboard);

  return (
    <div className="dashboard-wrapper">
      { goals.map((goalKey) => (
        <Card key={ goalKey } className="dashboard-widget">
          <CardHeader
            className="dashboard-widget-header"
            title={ <span className="dashboard-widget-title">{ dashboard[goalKey].title }</span> }
            subtitle={ <span className="dashboard-widget-subtitle">{ dashboard[goalKey].value + ` / ` + dashboard[goalKey].limit }</span> }
            avatar={ <Avatar size={ 60 } src={ dashboard[goalKey].avatar } /> }
          >
          <IconMenu
            className="dashboard-widget-iconmenu"
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
          >
            <MenuItem primaryText="Increase" leftIcon={ <FontIcon className="fa fa-arrow-circle-up" /> } />
            <MenuItem primaryText="Decrease" leftIcon={ <FontIcon className="fa fa-arrow-circle-down" /> } />
            <Divider />
            <MenuItem primaryText="Cancel" />
          </IconMenu>
          </CardHeader>
        </Card>
      )) }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dashboard: state.dashboard
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
