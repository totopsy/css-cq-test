import { createSelector }
  from 'reselect'

import { compose, defaultTo, prop, map, merge }
  from 'ramda'

// const getSub = state => R.prop('sub')(state)
const getFilter = prop('filter')
const getCategories = prop('categories')
const getTransactions = prop('transactions')

const getVisible = createSelector(
  [getFilter, getCategories, getTransactions],
  (filter, categories, transactions) => {
    console.log('filtering data');
    return {filter, computed: []};
  })

export default getVisible
