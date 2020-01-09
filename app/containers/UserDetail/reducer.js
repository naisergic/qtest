import {
  FETCH_USER_DETAIL_SUCCESS,
} from './constants';

const INITIAL_STATE = {
  data: {},
};

const userDetailReducer = (
  state = INITIAL_STATE,
  {
    type, data, id,
  },
) => {
  switch (type) {
    case FETCH_USER_DETAIL_SUCCESS:

      const prevData = state.data;
      prevData[id] = data;

      const stateData = JSON.parse(JSON.stringify(prevData));
      return { ...state, data: stateData };
    default:
      return state;
  }
};

export default userDetailReducer;
