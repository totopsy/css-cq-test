import React from 'react'

import { mapIndexed } from '../utils/ramda'
import ListItem from './listitem'

const List = ({ data }) => (
  <div>
    <p>DATA RENDER BELOW</p>
    <ul>{
      mapIndexed((item, idx) =>
        <ListItem
          key={ idx }
          id={ item.id }
          name={ item.name }
          value={ item.value }/>,
      data)}
    </ul>
  </div>)

List.propTypes = {
  data: React.PropTypes.array.isRequired
}

export default List