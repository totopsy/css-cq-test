import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

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

// store test
import { setFilter } from './actions/filter'
store.dispatch(setFilter({income:true,outcome:false}))

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app'));
