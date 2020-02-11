import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

export default class BurgerBuilder extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <Fragment>
                <div>Burger</div>
                <div>Build Controls</div>
            </Fragment>
        )
    }
}
