import React from 'react'
import { connect } from 'react-redux'

import { getFilter as mapStateToProps } from '../utils/selectors'
import { toggle } from '../actions/filter'

import Checkbox from './checkbox'

const Filter = ({ status, toggle }) => (
  <form>
    <Checkbox onCheck={ toggle } status={ status } name={ 'income' }/>
    <Checkbox onCheck={ toggle } status={ status } name={ 'outcome' }/>
  </form>)

Filter.PropTypes = {
  status: React.PropTypes.object.isRequired,
  toggle: React.PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  { toggle })(Filter)
