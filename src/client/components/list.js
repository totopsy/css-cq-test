import React from 'react'

import { mapIndexed } from '../utils/ramda'
import { sort } from 'ramda'
import ListItem from './listitem'

const sortR = sort((a,b) => b[1] - a[1])

const List = ({ data }) => (
  <div>
    <p>DATA RENDER BELOW</p>
    <ul>{
      mapIndexed((item, idx) =>
        <ListItem
          key={ idx }
          name={ item[0] }
          value={ item[1] } />,
        sortR(data))
    }
    </ul>
  </div>)

List.propTypes = {
  data: React.PropTypes.array.isRequired
}

export default List