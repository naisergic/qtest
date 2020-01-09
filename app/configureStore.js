import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { fromJS } from 'immutable';

import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducers';
import rootSaga from './rootSagas';

const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState = {}) {
  const middlewares = [sagaMiddleware];
  const store = createStore(
    rootReducer,
    fromJS(initialState),
    composeWithDevTools(applyMiddleware(...middlewares)),
  );
  sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore({});
