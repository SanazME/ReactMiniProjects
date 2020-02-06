import React, { Component, Fragment } from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass'
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';


// import Aux from '../../../hoc/Aux'

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] is rendering ...')
        return (
            <Fragment>
                <AuthContext.Consumer>
                    {(context) => context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
                </AuthContext.Consumer>
                <p key="i1" onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old.</p>
                <p key="i2">{this.props.children}</p>
                <input
                    ref={this.inputElementRef}
                    key="i3"
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Fragment>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    changed: PropTypes.func.isRequired
}

export default withClass(Person, classes.Person); 
