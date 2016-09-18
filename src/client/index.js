import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import createLogger from 'redux-logger'

// import * as reducers from './dux/index'
// const rootReducer = combineReducers(reducers)
import reducer from './reducers/index'

import mapStateToProps from './selectors/index'

import App from './components/app'

// const stateMap ={
//   filter: {
//     income: false,
//     outcome: true
//   },
//   categories: [],
//   transactions: []
// }

//createStore(reducer, [preloadedState], [enhancer])
const store = createStore(
  reducer,
  applyMiddleware(createLogger())
);

// store test
import { setFilter } from './actions/filter';
store.dispatch(setFilter({
  income: true,
  outcome: true
}))

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app'));
