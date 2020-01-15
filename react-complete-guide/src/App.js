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

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
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

    let people = null
    if (this.state.showPerson) {
      people = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => { this.deletePersonHandler(index) }}
                // click={this.deletePersonHandler.bind(this, index)}
                name={person.name}
                age={person.age} />
            )
          })}
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
        {people}
      </div>
    );
  }
}

export default App;


