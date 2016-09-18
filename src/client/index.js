import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// import * as reducers from './dux/index'
// const rootReducer = combineReducers(reducers)
import reducer from './reducers/index'

import App from './components/app'

const stateMap ={
  visibility: {
    income: false,
    outcome: true
  },
  categories: [],
  transactions: []
}

//createStore(reducer, [preloadedState], [enhancer])
const store = createStore(
  reducer,
  stateMap
);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app'));
