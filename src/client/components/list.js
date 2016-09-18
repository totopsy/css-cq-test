import React from 'react'

const List = data => {
  console.log(data);
  return <div><p>DATA RENDER BELOW</p></div>
}

List.propTypes = {
  data: React.PropTypes.array.isRequired
}

export default List