import React from 'react';
import { connect } from 'react-redux';

import { identity as mapStateToProps } from 'ramda'

const App = ({ placeholder }) => <div>{ placeholder }</div>

export default connect(mapStateToProps)(App);
