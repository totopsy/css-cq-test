import { createSelector } from 'reselect'
import { prop, map, merge } from 'ramda'

export const getFilter = prop('filter')
const getCategories = prop('categories')
const getTransactions = prop('transactions')

// const getId = prop('id')


const computeVisible = () => (
  [
    {id: 42, name: 'placeholder', value: 1337},
    {id: 3, name: 'tes3', value: 2},
    {id: 0, name: 'test', value: 0}
  ]
)

const computeState = createSelector(
  [getFilter, computeVisible],
  (filter, computed) => {
    // console.log('computing');
    return {filter, computed};
  })

export default computeState
