import { createSelector } from 'reselect'
import { prop, map, merge } from 'ramda'

const getFilter = prop('filter')
const getCategories = prop('categories')
const getTransactions = prop('transactions')

const getVisible = createSelector(
  [getFilter, getCategories, getTransactions],
  (filter, categories, transactions) => {
    console.log('computing');
    return {filter, computed: []};
  })

export default getVisible
