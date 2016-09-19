import React from 'react';
import { connect } from 'react-redux';

// import { identity as mapStateToProps } from 'ramda'
import mapStateToProps from '../utils/selectors'

import Filter from './filter'
import List from './list'

const App = ({ filter, filtered }) => (
  <div>
    <Filter status={ filter } />
    <List data={ filtered } />
  </div>)

App.propTypes = {
  filter: React.PropTypes.object.isRequired,
  filtered: React.PropTypes.array.isRequired,
  // categories: React.PropTypes.object.isRequired
}

export default connect(mapStateToProps)(App);
