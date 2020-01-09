import { connect } from 'react-redux';
import LoginComponent from '../../components/Login/Login';
import { login } from './actions';

const mapStateToProps = (state) => ({
  isLoggedIn: state.get('login').isLogin,
  isError: state.get('login').error,
});

const mapDispathToProps = (dispatch) => ({
  // eslint-disable-next-line max-len
  submitHandler: (email, password, keepMeSignIn) => dispatch(login({ email, password, keepMeSignIn })),
});

export default connect(mapStateToProps, mapDispathToProps)(LoginComponent);
