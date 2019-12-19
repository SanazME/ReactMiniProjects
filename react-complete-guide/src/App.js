import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'



const app = props => {

  const [personState, setPersonState] = useState(
    {
      persons: [
        { name: "Bob", age: 34 },
        { name: "Kat", age: 3 },
        { name: "Stephanie", age: 26 }
      ],
      clicked: true,

      otherState: "some other unchanged state"
    });

  // Multiple useStates with object-like and string-like states
  const [otherState, setOtherState] = useState({ otherState: "some other unchanged state" })
  const [otherState2, setOtherState2] = useState("just a string")

  // setPersonState, a method to update the state
  const switchNameHandler = () => {
    setPersonState({
      persons: [
        { name: "Bobbing", age: 34 },
        { name: "Kat", age: 3 },
        { name: "Stephanie", age: 350 }
      ],

      clicked: !personState.clicked,
    })
  };

  console.log(personState, otherState, otherState2)

  return (
    < div className="App" >
      <h1>{personState.clicked ? 'ON' : 'OFF'}</h1>
      <h1>Hi! I'm a react Component</h1>
      <button onClick={switchNameHandler} >Switch Names</button>
      <button onClick={switchNameHandler} >{personState.clicked ? 'ON' : 'OFF'}</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age} />
      <Person name={personState.persons[1].name} age={personState.persons[1].age}>My hobbies are racing</Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age} />
    </div >
  );

}

export default app;


