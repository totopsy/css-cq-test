import { getTransactions } from '../utils/api'

export const TRANSACTIONS_LOADED = 'TRANSACTIONS_LOADED'

export const transactionsLoaded = transactions => ({
  type: TRANSACTIONS_LOADED,
  transactions
})

export const loadTransactions = () => dispatch => {
  getTransactions.then(data => dispatch(transactionsLoaded(data)))
}
