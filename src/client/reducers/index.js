import visibility from './visibility'
import categories from './categories'
import transactions from './transactions'
import { combineReducers } from 'redux'

const reducer = combineReducers({ visibility, categories, transactions })

export default reducer
