import React from 'react'

import Checkbox from './checkbox'

const Filter = ({ status }) => {
  // console.log(status)
  return (
    <form>
      <Checkbox onCheck={ console.log } status={ status.income } name={ 'income' }/>
      <Checkbox onCheck={ console.log } status={ status.outcome } name={ 'outcome' }/>
    </form>)
}

Filter.PropTypes = {
  status: React.PropTypes.object.isRequired
}

export default Filter
