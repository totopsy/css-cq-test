import { TRANSACTIONS_LOADED } from '../actions/transactions'

const reducer = (state = [], action) => {
  switch (action.type) {
    case TRANSACTIONS_LOADED:
      return action.transactions
    default:
      return state
  }
}

export default reducer
