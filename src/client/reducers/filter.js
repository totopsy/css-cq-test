import { SET_FILTER } from '../actions/filter'

const defaultFilter = {
  income: false,
  outcome: false
}

const reducer = (state = defaultFilter, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter
    default:
      return state
  }
}

export default reducer
