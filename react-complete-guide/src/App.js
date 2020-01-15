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

    otherState: "some other unchanged state",

    showPerson: false
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
  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow
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

    let person = null
    if (this.state.showPerson) {
      person = (
        <div>
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
      )
    }

    return (
      <div className="App">
        <h1>Hi! I'm a react Component</h1>
        <button
          style={style}
          onClick={this.togglePersonHandler} >
          Switch Names
        </button>
        {person}
      </div>
    );
  }
}

export default App;


