import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {
  state = {
    persons: [
      { id: 'asdfa', name: "Bob", age: 34 },
      { id: 'fghd', name: "Kat", age: 3 },
      { id: 'tyuity', name: "Stephanie", age: 26 }
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
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    })
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id);
    const person = { ...this.state.persons[personIndex] };
    // Update person's name
    person.name = event.target.value;
    // create a copy of state persons for immutability reasons
    const persons = [...this.state.persons];
    // update person name
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
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
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)} />
            )
          })}
        </div>
      )
      style.backgroundColor = 'red'
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


