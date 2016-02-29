import React from 'react';
import '../scss/widget.scss';

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

const Widget = ({ widgetData, onIncrease, onDecrease, allowEdit }) => {
  let menuIcon = null;
  if(allowEdit) {
    menuIcon = (
      <IconMenu
        className="widget-iconmenu"
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
      >
        <MenuItem
          primaryText="Increase"
          leftIcon={<FontIcon className="fa fa-arrow-circle-up" />}
          onTouchTap={onIncrease}
        />
        <MenuItem
          primaryText="Decrease"
          leftIcon={<FontIcon className="fa fa-arrow-circle-down" />}
          onTouchTap={onDecrease}
        />
        <Divider />
        <MenuItem primaryText="Cancel" />
      </IconMenu>
    );
  }

  return (
    <Card className="widget">
      <CardHeader
        className="widget-header"
        title={<span className="widget-title">{widgetData.title}</span>}
        subtitle={<span className="widget-subtitle">{widgetData.value + ` / ` + widgetData.limit}</span>}
        avatar={<Avatar size={60} src={widgetData.avatar} />}
      >
        {menuIcon}
      </CardHeader>
    </Card>
  );
};

export default Widget;
