import { createSelector } from 'reselect'
import { prop, merge } from 'ramda'

const getFilter = createSelector(prop('filter'))
const getCategories = createSelector(prop('categories'))
const getTransactions = createSelector(prop('transactions'))

const index = createSelector(
  [getFilter, getCategories, getTransactions],
  merge)

export default index
