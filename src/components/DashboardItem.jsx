import React, { PropTypes } from 'react';
import { IconButton } from 'material-ui';

const DashboardItem = () => (
  <div>
    <div>{`7.5 / 12`}</div>
    <div>{`62.5%`}</div>
    <div>{`People on the Bench`}</div>
    <div><IconButton iconClassName="fa fa-plus-circle" /></div>
  </div>
);

DashboardItem.propTypes = {
  onAddClick: PropTypes.func.isRequired
};

export default DashboardItem;
