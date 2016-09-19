import React from 'react'

const ListItem = ({ id, name, value }) => (
  <li>
    <span>{ `(${id})`}</span>
    <span>{ `${name} :`}</span>
    <span>{ `[${value}]`}</span>
  </li>)

export default ListItem
