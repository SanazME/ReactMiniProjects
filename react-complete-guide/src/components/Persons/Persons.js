import React, { PureComponent } from 'react'
import Person from './Person/Person'

class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps')
    //     return state
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate')
    //     if (nextProps.persons !== this.props.persons
    //         || nextProps.clicked !== this.props.clicked
    //         || nextProps.changed !== this.props.changed) {
    //         return true
    //     }
    //     return false;
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate')
        return { message: 'Snapshot!' }
    }

    componentDidMount(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidMount')
        console.log(snapshot)
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount')
    }

    render() {
        console.log('[Persons.js] rendering ...')
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    click={() => { this.props.clicked(index) }}
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    changed={(event) => this.props.changed(event, person.id)} />
            )
        })
    }

    // Return a list
}

export default Persons