export const SET_FILTER = 'SET_FILTER'
export const TOGGLE = 'TOGGLE'


export const setFilter = filter => ({
  type: SET_FILTER,
  filter
})

export const toggle = filter => ({
  type: TOGGLE,
  filter
})