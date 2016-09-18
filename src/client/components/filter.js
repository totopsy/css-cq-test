import React from 'react'

import Checkbox from './checkbox'

const Filter = ({ status }) => {
  // console.log(status)
  return (
    <form>
      <Checkbox handleChange={ console.log } status={ status.income } name={ 'income' }/>
      <Checkbox handleChange={ console.log } status={ status.outcome } name={ 'outcome' }/>
    </form>)
}

export default Filter
