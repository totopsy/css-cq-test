import React from 'react'

const ListItem = ({ id, name, value }) => (
  <li>
    <span>{ `(${id})`}</span>
    <span>{ `${name} :`}</span>
    <span>{ `[${value}]`}</span>
  </li>)

ListItem.propTypes = {
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.number.isRequired,
}

export default ListItem
