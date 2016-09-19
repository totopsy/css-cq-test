import { SET_FILTER, TOGGLE } from '../actions/filter'

import { assoc, not, prop } from 'ramda'

const defaultFilter = {
  income: false,
  outcome: false
}

const filterIn = prop('filter')
// const negProp = name => assoc(name, not(prop(name)))

const reducer = (state = defaultFilter, action) => {
  switch (action.type) {
    case SET_FILTER:
      return filterIn(action)
    case TOGGLE:
      return assoc(filterIn(action), not(prop(filterIn(action), state)), state)
    default:
      return state
  }
}

export default reducer
