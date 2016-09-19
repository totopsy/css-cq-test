import { CATEGORIES_LOADED } from '../actions/categories'

const reducer = (state = [], action) => {
  switch (action.type) {
    case CATEGORIES_LOADED:
      return action.categories
    default:
      return state
  }
}

export default reducer
