import {connect} from 'react-redux';
import DashboardComponent from '../components/Dashboard.jsx';

const mapStateToProps = (state) => {
  return {
  };
}

const DashboardContainer = connect(
  mapStateToProps
)(DashboardComponent);

export default DashboardContainer;
