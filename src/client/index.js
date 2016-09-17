import React from 'react'
import { render } from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

// import * as reducers from './dux/index'
// const rootReducer = combineReducers(reducers)
import { reducer } from './dux/placeholder'

import App from './components/app'

//createStore(reducer, [preloadedState], [enhancer])
const rootStore = createStore(
  reducer,
  {
    placeholder: 'value'
  }
);

render(
  <Provider store={rootStore}>
    <App/>
  </Provider>,
  document.getElementById('app'));
