import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

export default function BuildControls(props) {

    const controls = [
        { label: 'Salad', type: 'salad' },
        { label: 'Meat', type: 'meat' },
        { label: 'Cheese', type: 'cheese' },
        { label: 'Bacon', type: 'bacon' }
    ];

    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
            {controls.map(ele => (
                <BuildControl
                    added={() => { props.ingrediantAdded(ele.type) }}
                    removed={() => { props.ingrediantRemoved(ele.type) }}
                    key={ele.label}
                    label={ele.label}
                    disabled={props.disabled[ele.type]}
                />
            ))}
            <button
                className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.ordered}>
                ORDER NOW
            </button>
        </div>
    )
}
