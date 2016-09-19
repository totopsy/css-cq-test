import React from 'react'

import { prop } from 'ramda'

const Checkbox = ({ onCheck, status, name}) => (
  <div>
    <span><input
      defaultChecked={ prop(name, status) }
      onChange={ () => onCheck(name) }
      type="checkbox"/></span>
    <span>{ name }</span>
  </div>
)

Checkbox.propTypes = {
  onCheck: React.PropTypes.func.isRequired,
  status: React.PropTypes.object.isRequired,
  name: React.PropTypes.string.isRequired
}

export default Checkbox
