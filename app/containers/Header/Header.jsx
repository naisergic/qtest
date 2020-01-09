import { connect } from 'react-redux';
import HeaderComponent from '../../components/Header/Header';
import { logout } from '../Login/actions';

const mapStateToProps = (state) => ({
  isLoggedIn: state.get('login').isLogin,
  isError: state.get('login').error,
});

const mapDispathToProps = (dispatch) => ({
  makeLogout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispathToProps)(HeaderComponent);
