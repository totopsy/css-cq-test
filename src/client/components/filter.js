import React from 'react'

import Checkbox from './checkbox'

const Filter = ({ status }) => {
  // console.log(status)
  return (
    <form>
      <Checkbox handleChange={ console.log } status={ status.income } text={ 'placeholder' }/>
      <Checkbox handleChange={ console.log } status={ status.outcome } text={ 'placeholder' }/>
    </form>)
}

export default Filter
