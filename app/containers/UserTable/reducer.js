import {
  FETCH_USER_TABLE_SUCCESS,
} from './constants';

const INITIAL_STATE = {
  data: {},
  totalPages: 0,
};

const tableReducer = (
  state = INITIAL_STATE,
  {

    type, data, pageNumber, total_pages,
  },
) => {
  switch (type) {
    case FETCH_USER_TABLE_SUCCESS:

      const prevData = state.data;
      prevData[pageNumber] = data;

      const stateData = JSON.parse(JSON.stringify(prevData));
      return { ...state, data: stateData, totalPages: total_pages };
    default:
      return state;
  }
};

export default tableReducer;
