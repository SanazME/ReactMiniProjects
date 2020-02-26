import React, { PureComponent, Fragment } from 'react'
import Button from '../../UI/Button/Button'

export default class OrderSummary extends PureComponent {

    componentWillUpdate() {
        console.log('[OrderSummary]Component will update')
    }
    render() {
        const ingrediantSummary = Object.keys(this.props.ingrediants).filter(ing => this.props.ingrediants[ing] !== 0).map(
            ing => {
                return (
                    <li key={ing}>
                        <span style={{ textTransform: 'capitalize' }}>{ing}</span>:{this.props.ingrediants[ing]}
                    </li>
                )
            }
        )

        return (
            <Fragment>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingrediants:</p>
                <ul>
                    {ingrediantSummary}
                </ul>
                <p>Total Price: <strong>{this.props.totalPrice.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType='Danger' clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button btnType='Success' clicked={this.props.purchaseContinued}>CONTINUE</Button>

            </Fragment>
        )
    }
}
