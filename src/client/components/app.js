import React from 'react';
import { connect } from 'react-redux';

import { identity as mapStateToProps } from 'ramda'

import Filter from './filter'

const App = ({visibility, categories, transactions}) => {
  // console.log(visibility);
  return (<div>
      <Filter status={ visibility }/>
    </div>)
}

export default connect(mapStateToProps)(App);
