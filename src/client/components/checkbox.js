import React from 'react'

import { assoc, not, prop } from 'ramda'


const Checkbox = ({ onCheck, status, name}) => {
  const isChecked = prop(name, status)
  // console.log(status);
  // const toggle = () => 
  return(
    <div>
      <span><input
        defaultChecked={ isChecked }
        onChange={ () => onCheck(name) }
        type="checkbox"/></span>
      <span>{ name }</span>
    </div>
  )
}

Checkbox.propTypes = {
  onCheck: React.PropTypes.func.isRequired,
  status: React.PropTypes.object.isRequired,
  name: React.PropTypes.string.isRequired
}

export default Checkbox
