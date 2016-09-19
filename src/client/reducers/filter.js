import { TOGGLE } from '../actions/filter'

const defaultFilter = {
  income: true,
  outcome: true
}

const reducer = (state = defaultFilter, action) => {
  switch (action.type) {
    case TOGGLE:
      return {...state, [action.filter]: !state[action.filter]}
    default:
      return state
  }
}

export default reducer
