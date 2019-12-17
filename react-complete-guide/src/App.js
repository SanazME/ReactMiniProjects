import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi! I'm a react Component</h1>
        <Person name="Bob" age="34" />
        <Person name="Kat" age="3">My hobbies: racing</Person>
      </div>
    );
  }
}

export default App;
