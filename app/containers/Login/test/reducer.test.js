import loginReducer from '../reducer';
import { loginSuccess, loginFailure, logout } from '../actions';

describe('Login reducer test', () => {
  it('succes login', () => {
    const action = loginSuccess(true);
    const expectedSate = { isLogin: true, error: false };
    expect(loginReducer(undefined, action)).toEqual(expectedSate);
  });
  it('login failure', () => {
    const action = loginFailure(false);
    const expectedSate = { isLogin: false, error: true };
    expect(loginReducer(undefined, action)).toEqual(expectedSate);
  });
  it('logout check', () => {
    const action = logout();
    const expectedSate = { isLogin: false, error: false };
    expect(loginReducer(undefined, action)).toEqual(expectedSate);
  });
});
