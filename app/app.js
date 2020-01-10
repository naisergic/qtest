import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './configureStore';
import AppContainer from './containers/App';

/* eslint-disable  react/jsx-filename-extension */
const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<div />}>
        <AppContainer />
      </Suspense>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<App />, document.querySelector('#root'));
