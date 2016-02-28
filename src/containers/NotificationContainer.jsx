import {connect} from 'react-redux';
import Notification from '../components/Notification.jsx';

const mapStateToProps = (state) => {
  return {
    title: state.notification.title,
    message: state.notification.message
  };
}

export default connect(mapStateToProps)(Notification);
