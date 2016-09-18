import React from 'react'

const Checkbox = ({ onCheck, status, name}) => {
  console.log(status);
  return(
    <div>
      <input
        defaultChecked={ status }
        onChange={ onCheck(name) }
        type="checkbox"/>
      <div>{ name }</div>
    </div>
  )
}

Checkbox.propTypes = {
  onCheck: React.PropTypes.func.isRequired,
  status: React.PropTypes.bool.isRequired,
  name: React.PropTypes.string.isRequired
}

export default Checkbox
