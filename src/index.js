import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer/index';
import createSagaMiddleware from '@redux-saga/core';
import watchFetchData from './saga/loadData';
import watchPushData from './saga/updateUser';

const init = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(watchFetchData);
  sagaMiddleware.run(watchPushData);

  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.querySelector('#root'));
};

init();
