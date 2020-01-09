import { all } from 'redux-saga/effects';
import loginSaga from './containers/Login/sagas';
import tableSaga from './containers/UserTable/sagas';
import userDetailSaga from './containers/UserDetail/sagas';

export const runSagas = (sagas) => {
  if (Array.isArray(sagas)) {
    return sagas.map((saga) => saga());
  }
  if (typeof sagas === 'function') {
    return Array.of(sagas());
  }
  throw new TypeError(`${sagas} should be an Array or Function`);
};
export default function* rootSaga() {
  yield all([
    ...runSagas(loginSaga),
    ...runSagas(tableSaga),
    ...runSagas(userDetailSaga),
  ]);
}
