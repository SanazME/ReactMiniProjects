import React, { Fragment } from 'react';

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

        </Fragment>
    );
};

export default OrderSummary;
