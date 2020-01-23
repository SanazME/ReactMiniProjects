import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

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
    const personIndex = this.state.persons.findIndex(person => person.Userid === id);
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

    let people = null
    if (this.state.showPerson) {
      people = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler} />
      )
    }

    return (
      <div className={classes.App}>
        <Cockpit
          personsLength={this.state.persons.length}
          showPerson={this.state.showPerson}
          clicked={this.togglePersonHandler}
        />
        {people}
      </div>
    );
  }
}

export default App;


