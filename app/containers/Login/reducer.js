import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from './constants';

const INITIAL_STATE = {
  isLogin: false,
  error: false,
};

const loginReducer = (
  state = INITIAL_STATE,
  {
    type,
  },
) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return { ...state, isLogin: true, error: false };
    case LOGIN_FAILURE:
      return { ...state, error: true, isLogin: false };
    case LOGOUT:
      return { ...state, isLogin: false };

    default:
      return state;
  }
};

export default loginReducer;
