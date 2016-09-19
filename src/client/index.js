import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

import { loadCategories } from './actions/categories'
import { loadTransactions } from './actions/transactions'

import createLogger from 'redux-logger'

import reducer from './reducers/index'

import App from './components/app'

const store = createStore(
  reducer,
  applyMiddleware(createLogger(), thunk)
);

// populating store
store.dispatch(loadCategories())
store.dispatch(loadTransactions())

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app'));
