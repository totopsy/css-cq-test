import React from 'react'

const Checkbox = ({handleChange, status, name}) => {
  console.log(handleChange)
  return(
    <div>
      <input type="checkbox" checked={ status } onChange={ handleChange(name) }/>
      { name }
    </div>
  )
}

export default Checkbox
