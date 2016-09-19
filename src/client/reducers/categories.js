import { SET_CATEGORIES } from '../actions/categories'

const reducer = (state = [], action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return action.categories
    default:
      return state
  }
}

export default reducer
