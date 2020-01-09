import { combineReducers } from 'redux-immutable';
import loginReducer from './containers/Login/reducer';
import userDetailReducer from './containers/UserDetail/reducer';
import tableReducer from './containers/UserTable/reducer';
import globalReducer from './global/reducer';

const rootReducer = combineReducers({
  login: loginReducer,
  userDetail: userDetailReducer,
  tableData: tableReducer,
  global: globalReducer,
});

export default rootReducer;
