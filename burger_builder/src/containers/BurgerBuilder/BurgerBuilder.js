import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

// Define a global constant to map ingrediants and their prices
const INGREDIANT_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

export default class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingrediants: {
            bacon: 0,
            salad: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false
    }

    updatePurchaseState = (ingrediants) => {
        let purchasable;

        const ingrediantCount = Object.values(ingrediants).reduce((acc, count) => acc + count, 0)

        this.setState(() => {
            return {
                purchasable: ingrediantCount > 0,
            };
        });
    }

    addIngrediantHandler = (type) => {

        const oldCount = this.state.ingrediants[type];

        // update state in an immutable way
        const updatedIngrediants = {
            ...this.state.ingrediants
        }
        updatedIngrediants[type] = oldCount + 1;

        // Enable or disable ORder Now button
        this.updatePurchaseState(updatedIngrediants);

        this.setState(() => {
            return {
                ingrediants: updatedIngrediants,
                totalPrice: this.state.totalPrice + INGREDIANT_PRICE[type]
            };
        });
    }

    removeIngrediantHandler = (type) => {
        // update ingrediante
        const oldCount = this.state.ingrediants[type];
        const updatedIngrediants = { ...this.state.ingrediants };
        let newCount = oldCount - 1;

        newCount = newCount < 0 ? 0 : newCount;
        updatedIngrediants[type] = newCount

        // Update Order Now button
        this.updatePurchaseState(updatedIngrediants)

        // update total price
        let newTotalPrice = this.state.totalPrice - INGREDIANT_PRICE[type];
        newTotalPrice = newTotalPrice < 0 ? 0 : newTotalPrice;

        this.setState(() => {
            return {
                ingrediants: updatedIngrediants,
                totalPrice: newTotalPrice
            }
        })

    }

    render() {
        // Diable less kets when the count of ingerediant is zero (or less)
        const disabledInfo = { ...this.state.ingrediants };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] === 0;
        }

        return (
            <Fragment>
                <Modal>
                    <OrderSummary ingrediants={this.state.ingrediants} />
                </Modal>
                <Burger ingrediants={this.state.ingrediants} />
                <BuildControls
                    ingrediantAdded={this.addIngrediantHandler}
                    ingrediantRemoved={this.removeIngrediantHandler}
                    disabled={disabledInfo}
                    totalPrice={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                />
            </Fragment>
        )
    }
}
