import React from 'react';
import classes from './Burger.module.css';
import BurgerIngrediants from './BurgerIngrediant/BurgerIngrediant';

export default function burger(props) {

    // transform the ingrediant obj to an array of jsx with unique keys
    let ingrediantArray = Object.keys(props.ingrediants)
        .map(ingKey => [...Array(props.ingrediants[ingKey])]
            .map((_, i) => {
                return <BurgerIngrediants type={ingKey} key={ingKey + i} />
            })
        )
        .reduce((acc, ele) => acc.concat(ele), [])

    // check if the ingrediant array is empty
    if (ingrediantArray.length === 0) {
        ingrediantArray = <p>Please start adding ingrediants!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngrediants type="bread-top" />
            {ingrediantArray}
            <BurgerIngrediants type="bread-bottom" />
        </div>
    )
}
