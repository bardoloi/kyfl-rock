import React from 'react';
import '../scss/dashboard.scss';
import { Paper, IconButton } from 'material-ui';

const DashboardItem = () => (
  <div>
    <div>{`7.5 / 12`}</div>
    <div>{`62.5%`}</div>
    <div>{`People on the Bench`}</div>
    <div><IconButton iconClassName="fa fa-plus-circle" /></div>
  </div>
);

const DashboardComponent = () => (
  <div className="dashboard-wrapper">
    <Paper className="dashboard-item" zDepth={1}>
      <DashboardItem />
    </Paper>
    <Paper className="dashboard-item" zDepth={1}/>
    <Paper className="dashboard-item" zDepth={1}/>
    <Paper className="dashboard-item" zDepth={1}/>
    <Paper className="dashboard-item" zDepth={1}/>
    <Paper className="dashboard-item" zDepth={1}/>
  </div>
)

export default DashboardComponent;
