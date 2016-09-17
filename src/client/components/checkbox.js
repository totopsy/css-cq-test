import React from 'react'

const Checkbox = ({handleChange, status, text}) => {
  console.log(handleChange)
  return(
    <div>
      <input type="checkbox" checked={ status } onChange={ handleChange }/>
      { text }
    </div>
  )
}

export default Checkbox
