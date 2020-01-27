import React, { useEffect } from 'react'
import classes from './Cockpit.css'

export default function Cockpit(props) {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        setTimeout(() => {
            alert('Saved in the cloud!')
        }, 1000);
    }, [props.personsLength]);

    // Define class names in an array
    const assignedClasses = []; //"red bold" => creates a valid css class
    let btnClass = '';

    if (props.showPerson) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red) // classes=['red']
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold); // classes=['red','bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button
                className={btnClass}
                onClick={props.clicked} >
                Switch Names
            </button>
        </div>
    )
}


