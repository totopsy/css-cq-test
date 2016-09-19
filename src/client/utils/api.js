import { get } from 'axios'

const API_URL = 'https://crossquantum.com/technicaltest'
const TRA = 'transactions'
const CAT = 'categories'

// returns promise, resolves as response, throws on error
// const apiGet = endpoint => get(`${API_URL}/${endpoint}`)

// gets on endpoint, invokes cb with resolution / error
const apiGet = (endpoint) => get(`${API_URL}/${endpoint}`)
  .then(({ data }) => data)
  .catch(console.warn)

export const getCategories = apiGet(CAT)
export const getTransactions = apiGet(TRA)