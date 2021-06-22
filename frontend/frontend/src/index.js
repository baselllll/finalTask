import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers";
import promiseMiddleware from "redux-promise"
let createStoreWithMW = applyMiddleware(promiseMiddleware)(createStore)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStoreWithMW(rootReducer)}>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
