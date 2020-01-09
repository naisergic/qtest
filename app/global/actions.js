import { API_CALL, API_CALL_RESULT } from './constants';

export function makeCall() {
  return {
    type: API_CALL,
  };
}

export function makeCallResult() {
  return {
    type: API_CALL_RESULT,
  };
}
