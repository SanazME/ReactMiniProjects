import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Bob", age: 34 },
      { name: "Kat", age: 3 },
      { name: "Stephanie", age: 26 }
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "Bobbing", age: 34 },
        { name: "Kat", age: 3 },
        { name: "Stephanie", age: 350 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi! I'm a react Component</h1>
        <button onClick={this.switchNameHandler} >Switch Names</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies are racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
