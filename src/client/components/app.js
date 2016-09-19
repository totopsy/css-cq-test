import React from 'react';
import { connect } from 'react-redux';

// import { identity as mapStateToProps } from 'ramda'
import mapStateToProps from '../utils/selectors'

import Filter from './filter'
import List from './list'

const App = ({ filter, computed }) => (
  <div>
    <Filter status={ filter } />
    <List data={ computed } />
  </div>)

App.propTypes = {
  filter: React.PropTypes.object.isRequired,
  computed: React.PropTypes.array.isRequired
  // categories: React.PropTypes.array.isRequired,
  // transactions: React.PropTypes.array.isRequired
}

export default connect(mapStateToProps)(App);
