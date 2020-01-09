import {
  call, put, takeLatest,
} from 'redux-saga/effects';
import { FETCH_USER_TABLE } from './constants';
import {
  fetchUserTableSuccess,
  fetchUserTableError,
} from './actions';
import Endpoints from '../../Endpoints';
import request from '../../utils/request';

function* fetchUserTable({ pageNumber }) {
  try {
    const {

      body: { data, error, total_pages },
      response: { status },
    } = yield call(request, {
      method: 'GET',
      url: Endpoints.getTable.replace(':pageNumber', pageNumber),
    });
    if (status === 200) {
      return yield put(fetchUserTableSuccess({ data, pageNumber, total_pages }));
    }
    return yield put(fetchUserTableError(error));
  } catch (e) {
    return yield put(fetchUserTableError(e));
  }
}

function* getUserTable() {
  yield takeLatest(FETCH_USER_TABLE, fetchUserTable);
}

export default [getUserTable];
