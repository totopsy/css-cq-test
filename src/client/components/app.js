import React from 'react';
import { connect } from 'react-redux';

import { identity as mapStateToProps } from 'ramda'

import Filter from './filter'

const App = ({filter, categories, transactions}) => {
  // console.log(filter);
  return (<div>
      <Filter status={ filter }/>
    </div>)
}

App.propTypes = {
  filter: React.PropTypes.object.isRequired,
  categories: React.PropTypes.array.isRequired,
  transactions: React.PropTypes.array.isRequired
}

export default connect(mapStateToProps)(App);
