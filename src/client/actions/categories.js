import { getCategories } from '../utils/api'

import { compose, fromPairs, map } from 'ramda'

export const CATEGORIES_LOADED = 'CATEGORIES_LOADED'

export const categoriesLoaded = categories => ({
  type: CATEGORIES_LOADED,
  // categories
  categories: compose(fromPairs, map( (cat) => [cat._id, cat.name]))(categories)
})

export const loadCategories = () => dispatch => {
  getCategories.then(data => dispatch(categoriesLoaded(data)))
}
