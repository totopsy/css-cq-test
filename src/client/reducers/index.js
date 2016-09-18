import filter from './filter'
import categories from './categories'
import transactions from './transactions'
import { combineReducers } from 'redux'

const reducer = combineReducers({ filter, categories, transactions })

export default reducer
