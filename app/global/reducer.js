import {
  API_CALL,
  API_CALL_RESULT,
} from './constants';

const INITIAL_STATE = {
  callNumber: 0,
};

const userDetailReducer = (
  state = INITIAL_STATE,
  {
    type,
  },
) => {
  switch (type) {
    case API_CALL:
      const prevCallNumber = state.callNumber;
      const newCallNumber = prevCallNumber + 1;
      return { ...state, callNumber: newCallNumber };
    case API_CALL_RESULT:
      const prevCallNumberDec = state.callNumber;
      const newCallNumberDec = prevCallNumberDec - 1;
      return { ...state, callNumber: newCallNumberDec };
    default:
      return state;
  }
};

export default userDetailReducer;
