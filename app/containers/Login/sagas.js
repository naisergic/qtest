import {
  call, put, takeLatest,
} from 'redux-saga/effects';
import Cookies from 'universal-cookie';
import { LOGIN } from './constants';
import {
  loginSuccess,
  loginFailure,
} from './actions';
import Endpoints from '../../Endpoints';
import request from '../../utils/request';
import { LOGIN_COOKIE_NAME } from '../../constants';

export function* performLogin({ email, password, keepMeSignIn }) {
  try {
    const {
      body: { token },
      response: { status },
    } = yield call(request, {
      method: 'POST',
      url: Endpoints.login,
      payload: { email, password },
    });

    if (status === 200) {
      const currentDate = new Date();
      let timeToExpire = 30;
      const cookies = new Cookies();
      if (keepMeSignIn) {
        timeToExpire = currentDate.setFullYear(currentDate.getFullYear() + 4);
      }
      cookies.set(LOGIN_COOKIE_NAME, token, { path: '/', maxAge: timeToExpire });
      return yield put(loginSuccess(true));
    }
    return yield put(loginFailure(true));
  } catch (e) {
    return yield put(loginFailure(true));
  }
}

function* login() {
  yield takeLatest(LOGIN, performLogin);
}

export default [login];
