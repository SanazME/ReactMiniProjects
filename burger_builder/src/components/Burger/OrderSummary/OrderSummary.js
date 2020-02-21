import React, { Fragment } from 'react';
import Button from '../../UI/Button/Button'

const OrderSummary = (props) => {
    const ingrediantSummary = Object.keys(props.ingrediants).filter(ing => props.ingrediants[ing] !== 0).map(
        ing => {
            return (
                <li key={ing}>
                    <span style={{ textTransform: 'capitalize' }}>{ing}</span>:{props.ingrediants[ing]}
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
            <p>Continue to checkout?</p>
            <Button btnType='Danger' clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType='Success' clicked={props.purchaseContinued}>CONTINUE</Button>

        </Fragment>
    );
};

export default OrderSummary;
