import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { put } from 'redux-saga/effects';
import * as actions from '../actions';
import { performLogin } from '../sagas';

describe('login reducer', () => {
  test('login failure', () => {
    const obj = {
      email: 'hello@yahoo.com', password: '13134', keepMeSignIn: true,
    };
    const gen = performLogin(obj);
    gen.next();
    const data = gen.next({ a: 'hello' });
    expect(data.value).toEqual(put(actions.loginFailure({ err: undefined })));
  });
  test('login success', () => {
    const obj = {
      email: 'hello@yahoo.com', password: '13134', keepMeSignIn: true,
    };
    const gen = performLogin(obj);
    gen.next();
    const result = {
      response: {
        status: 200,
      },
      body: {
        token: 'sdfewrwf',
      },
    };
    const data = gen.next(result);
    expect(data.value).toEqual(put(actions.loginSuccess(true)));
  });
});
