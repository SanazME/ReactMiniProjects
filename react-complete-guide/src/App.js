import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {
  state = {
    persons: [
      { name: "Bob", age: 34 },
      { name: "Kat", age: 3 },
      { name: "Stephanie", age: 26 }
    ],
    clicked: true,

    otherState: "some other unchanged state"
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 34 },
        { name: "Kat", age: 3 },
        { name: "Stephanie", age: 350 }
      ],
    })
  }

  toggleHandler = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi! I'm a react Component</h1>
        <button onClick={this.switchNameHandler.bind(this, "Maxi!!!")} >Switch Names</button>
        <button onClick={this.toggleHandler} >{this.state.clicked ? 'ON' : 'OFF'}</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Maxii!")}>
          My hobbies are racing</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={() => { this.switchNameHandler("Miranda!?") }} />
      </div>
    );
  }
}

export default App;


