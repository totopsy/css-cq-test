import { createSelector } from 'reselect'
import R from 'ramda'

const getFilter = R.prop('filter')
const getCategories = R.prop('categories')
const getTransactions = R.prop('transactions')

const isIncome = x => x.value > 0
const isOutcome = x => !isIncome(x)

const filterTransactions = (filter, transactions, categories) => {
  const logged =  R.compose(
    R.map(value => R.reduce((acc, v) => acc + v.value, 0, value)),
    R.groupBy(R.path(['category', 'id'])),
    R.filter(isSelected(filter))
    )(transactions)

    const test = R.compose(R.map(([key, sum]) => [categories[key], parseInt(sum, 10)]), R.toPairs)(logged)
    return test
  }

const isSelected = (filter) => transaction => {
  if (filter.income && filter.outcome) {
    return true
  } else if (filter.income) {
    return isIncome(transaction)
  } else if (filter.outcome) {
    return isOutcome(transaction)
  }
  return false
}

const computeState = createSelector(
  [getFilter, getCategories, getTransactions],
  (filter, categories, transactions) => {
    return {
      filter,
      categories,
      filtered: filterTransactions(filter, transactions, categories)
    }
  })

export default computeState

