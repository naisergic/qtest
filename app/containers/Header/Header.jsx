import { connect } from 'react-redux';
import HeaderComponent from '../../components/Header/Header';
import { logout, loginSuccess } from '../Login/actions';

const mapStateToProps = (state) => ({
  isLoggedIn: state.get('login').isLogin,
  isError: state.get('login').error,
});

const mapDispathToProps = (dispatch) => ({
  makeLogout: () => dispatch(logout()),
  performLoginSuccess: (val) => dispatch(loginSuccess(val)),
});

export default connect(mapStateToProps, mapDispathToProps)(HeaderComponent);
