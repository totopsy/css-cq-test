import { get } from 'axios'
import { identity } from 'ramda'

const API_URL = 'https://crossquantum.com/technicaltest'
const TRA = 'transactions'
const CAT = 'categories'

// returns promise, resolves as response, throws on error
// const apiGet = endpoint => get(`${API_URL}/${endpoint}`)

// gets on endpoint, invokes cb with resolution / error
const apiGet = (endpoint, cb = identity) => get(`${API_URL}/${endpoint}`)
  .then(({ data }) => (cb(data), data))
  .catch(cb)

const getCategories = cb => apiGet(CAT, cb)

const getTransactions = cb => apiGet(TRA, cb)

// test stuff
import { __, compose as c, length } from 'ramda'
const format = __ => `got ${__} items`
const confirm = c(console.log, format, length)
export const test = () => {
  console.log('fetching api content');
  getTransactions(confirm)
  getCategories().then(confirm)
}

// export const loader = onEnd => get(`${API_URL}/`)
