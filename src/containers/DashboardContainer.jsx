import React from 'react';
import { connect } from 'react-redux';
import '../scss/dashboard.scss';

// material-ui components
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import Avatar from 'material-ui/lib/avatar';

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
          />
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
