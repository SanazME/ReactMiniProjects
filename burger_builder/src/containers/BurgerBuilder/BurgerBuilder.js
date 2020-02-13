import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Burger from '../../components/Burger/Burger'

export default class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingrediants: {
            bacon: 1,
            salad: 2,
            cheese: 2,
            meat: 2
        }
    }

    render() {
        return (
            <Fragment>
                <Burger ingrediants={this.state.ingrediants} />
                <div>Build Controls</div>
            </Fragment>
        )
    }
}
