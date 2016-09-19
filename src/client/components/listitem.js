import React from 'react'

const ListItem = ({ name, value }) => (console.log(value),
  <li>
    <span>{ `${name} :`}</span>
    <span>{ `[${value}]`}</span>
  </li>)

ListItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.number.isRequired,
}

export default ListItem
