import { FETCH_USER_TABLE, FETCH_USER_TABLE_SUCCESS, FETCH_USER_TABLE_ERROR } from './constants';

export function fetchUserTable(pageNumber) {
  return {
    type: FETCH_USER_TABLE,
    pageNumber,
  };
}

export function fetchUserTableSuccess({ data, pageNumber, total_pages }) {
  return {
    type: FETCH_USER_TABLE_SUCCESS,
    data,
    pageNumber,
    total_pages,
  };
}

export function fetchUserTableError({ error }) {
  return {
    type: FETCH_USER_TABLE_ERROR,
    error,
  };
}
