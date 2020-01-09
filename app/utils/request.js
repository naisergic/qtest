import axios from 'axios';
import store from '../configureStore';
import { makeCall, makeCallResult } from '../global/actions';

export const request = (opt) => {
  const config = {
    method: opt.method,
    timeout: '30000',
    url: opt.url,
    data: opt.payload,
    responseType: opt.responseType,
    headers: {
      Accept: opt.Accept || 'application/json;charset=UTF-8',
    },
  };
  return new Promise((resolve, reject) => {
    store.dispatch(makeCall());
    axios(config)
      .then((response) => {
        store.dispatch(makeCallResult());
        window.popupMsg = '';
        // store.dispatch(progressBarLoaderToggle(false, DEFAULT_LOADER_TEXT));
        if (response.data) {
          const parsedData = response.data;
          return resolve({
            body: parsedData,
            response,
          });
        }
        return reject({
          body: response.error,
          statusCode: response.status,
        });
      })
      .catch((error) => {
        store.dispatch(makeCallResult());
        window.popupMsg = '';
        // store.dispatch(progressBarLoaderToggle(false, window.popupMsg));
        reject(error);
      });
  });
};

export default request;
