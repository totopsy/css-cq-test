import { SET_TRANSACTIONS } from '../actions/transactions'

const reducer = (state = [], action) => {
  switch (action.type) {
    case SET_TRANSACTIONS:
      return action.transactions
    default:
      return state
  }
}

export default reducer
