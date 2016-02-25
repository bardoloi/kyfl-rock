import React, { PropTypes } from 'react';
import '../scss/dashboard.scss';
import { Paper } from 'material-ui';
import DashboardItem from '../components/DashboardItem.jsx';

const Dashboard = ({ onAddClick }) => (
  <div className="dashboard-wrapper">
    <Paper className="dashboard-item" zDepth={1}>
      <DashboardItem onAddClick={onAddClick} />
    </Paper>
    <Paper className="dashboard-item" zDepth={1}/>
    <Paper className="dashboard-item" zDepth={1}/>
    <Paper className="dashboard-item" zDepth={1}/>
    <Paper className="dashboard-item" zDepth={1}/>
    <Paper className="dashboard-item" zDepth={1}/>
  </div>
);

Dashboard.propTypes = {
  onAddClick: PropTypes.func.isRequired
};

export default Dashboard;
