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

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Bob", age: 34 },
        { name: event.target.value, age: 3 },
        { name: "Stephanie", age: 27 }
      ],
    })
  }

  toggleHandler = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi! I'm a react Component</h1>
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, "Maxi!!!")} >Switch Names
        </button>
        <button onClick={this.toggleHandler} >{this.state.clicked ? 'ON' : 'OFF'}</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Maxii!")}
          changed={this.nameChangeHandler}>
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


