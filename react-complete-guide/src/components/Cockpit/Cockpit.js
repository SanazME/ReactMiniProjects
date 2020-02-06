import React, { useEffect, useRef, useContext } from 'react'
import classes from './Cockpit.css'
import AuthContext from '../../context/auth-context'

function Cockpit(props) {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log('authContext.authenticated : ', authContext.authenticated)

    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        // setTimeout(() => {
        //     alert('Saved in the cloud!')
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect')
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect')
        return () => {
            console.log('[Cockpit.js} cleanup work in 2nd useEffect')
        };
    });

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
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked} >
                Switch Names
            </button>
            <button onClick={authContext.login}>
                Log in
            </button>

        </div>
    )
}

export default React.memo(Cockpit)


