import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import { getCategories, getTransactions } from './utils/api'
import { setCategories } from './actions/categories'
import { setTransactions } from './actions/transactions'

import createLogger from 'redux-logger'

// import * as reducers from './dux/index'
// const rootReducer = combineReducers(reducers)
import reducer from './reducers/index'

import mapStateToProps from './utils/selectors'

import App from './components/app'

import { test } from './utils/api'
test();

const store = createStore(
  reducer,
  applyMiddleware(createLogger())
);

// populating store
getCategories().then(cats => store.dispatch(setCategories(cats)))
getTransactions().then(trans => store.dispatch(setTransactions(trans)))

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app'));
