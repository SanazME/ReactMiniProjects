import React from 'react'
import Person from './Person/Person'

export default function Persons(props) {
    // Return a list
    return props.persons.map((person, index) => {
        return (
            <Person
                click={() => { props.clicked(index) }}
                key={person.id}
                name={person.name}
                age={person.age}
                changed={(event) => props.changed(event, person.id)} />
        )
    })
}
