import {
  LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT,
} from './constants';

export function login({ email, password, keepMeSignIn }) {
  return {
    type: LOGIN,
    email,
    password,
    keepMeSignIn,
  };
}

export function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    data,
  };
}

export function loginFailure({ err }) {
  return {
    type: LOGIN_FAILURE,
    err,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
