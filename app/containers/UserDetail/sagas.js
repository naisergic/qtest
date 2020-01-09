import {
  call, put, takeLatest,
} from 'redux-saga/effects';
import { FETCH_USER_DETAIL } from './constants';
import {
  fetchUserDetailSuccess,
  fetchUserDetailError,
} from './actions';
import Endpoints from '../../Endpoints';
import request from '../../utils/request';

function* getUserDetail({ id }) {
  try {
    const {
      body: { data },
      response: { status },
    } = yield call(request, {
      method: 'GET',
      url: Endpoints.userDetail.replace(':id', id),
    });
    if (status === 200) {
      return yield put(fetchUserDetailSuccess({ data, id }));
    }
    return yield put(fetchUserDetailError(true));
  } catch (e) {
    return yield put(fetchUserDetailError(true));
  }
}

function* fetchUserDetail() {
  yield takeLatest(FETCH_USER_DETAIL, getUserDetail);
}

export default [fetchUserDetail];
