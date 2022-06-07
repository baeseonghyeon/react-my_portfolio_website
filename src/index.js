import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

import './scss/global.scss';

import App from './App';
import * as serviceWorker from './serviceWorker';

// Redux 관련 불러오기
import { createStore } from 'redux'
import rootReducer from './modules';
import { Provider } from 'react-redux';

// 스토어 생성
const store = createStore(rootReducer);
console.log(store.getState()); 

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
serviceWorker.unregister();
