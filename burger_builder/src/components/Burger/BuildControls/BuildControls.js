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
            {controls.map(ele => (
                <BuildControl
                    added={() => { props.ingrediantAdded(ele.type) }}
                    removed={() => { props.ingrediantRemoved(ele.type) }}
                    key={ele.label}
                    label={ele.label}
                />
            ))}
        </div>
    )
}
