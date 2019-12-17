import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    //   return (
    //     <div className="App">
    //       <h1>Hi! I'm a react Component</h1>
    //     </div>
    //   );
    return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'m a new react element'))
  }
}

export default App;
