import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Burger from '../../components/Burger/Burger'

export default class BurgerBuilder extends Component {


    render() {
        return (
            <Fragment>
                <Burger />
                <div>Build Controls</div>
            </Fragment>
        )
    }
}
