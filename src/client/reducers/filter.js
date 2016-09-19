import { SET_FILTER, TOGGLE } from '../actions/filter'

import { assoc, not, prop } from 'ramda'

const defaultFilter = {
  income: false,
  outcome: false
}

const reducer = (state = defaultFilter, action) => {
  switch (action.type) {
    case SET_FILTER:
      return filterIn(action)
    case TOGGLE:
      return assoc(action.filter, not(prop(action.filter, state)), state)
    default:
      return state
  }
}

export default reducer
