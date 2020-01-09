import { FETCH_USER_DETAIL, FETCH_USER_DETAIL_SUCCESS, FETCH_USER_DETAIL_ERROR } from './constants';

export function fetchUserDetail(id) {
  return {
    type: FETCH_USER_DETAIL,
    id,
  };
}

export function fetchUserDetailSuccess({ data, id }) {
  return {
    type: FETCH_USER_DETAIL_SUCCESS,
    data,
    id,
  };
}

export function fetchUserDetailError({ error }) {
  return {
    type: FETCH_USER_DETAIL_ERROR,
    error,
  };
}
