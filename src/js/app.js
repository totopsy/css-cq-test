require('es6-promise').polyfill();

import React from 'react';
import {render} from 'react-dom';

import {Main} from './components/main';

export class App extends React.Component {
    render(){
        return (
            <div>
                <h1>Everything start here :)</h1>
                <Main></Main>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));