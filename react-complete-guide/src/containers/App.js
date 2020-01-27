import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor')
    // this.state = ...
  }

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

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
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

  nameChangeHandler = (event, UserId) => {
    const personIndex = this.state.persons.findIndex(person => person.id === UserId);
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
    console.log('[App.js] render')

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
          title={this.props.appTitle}
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


