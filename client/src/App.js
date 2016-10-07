import React, { Component } from 'react';
import './App.css';

import Voting from './components/Voting';

const pair = ['Trainspotting','28 Days Later'];

class App extends Component {
    render() {
        return (
            <Voting pair={pair} hasVoted="Trainspotting" />
        );
    }
}

export default App;


// <div className="App">
//   <div className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <h2>Welcome to React</h2>
//   </div>
//   <p className="App-intro">
//     To get started, edit <code>src/App.js</code> and save to reload, and then some.
//   </p>
// </div>
