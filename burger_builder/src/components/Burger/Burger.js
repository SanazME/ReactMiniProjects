import React from 'react';
import classes from './Burger.module.css';
import BurgerIngrediants from './BurgerIngrediant/BurgerIngrediant';

export default function burger(props) {

    let ingrediantArray = [];

    for (const ingrediant in props.ingrediants) {
        ingrediantArray.push([...Array(props.ingrediants[ingrediant])].map(
            (_, i) => {
                return <BurgerIngrediants type={ingrediant} key={ingrediant + i} />
            }
        ))
    }
    console.log(ingrediantArray)

    return (
        <div className={classes.Burger}>
            <BurgerIngrediants type="bread-top" />
            {/* <BurgerIngrediants type="cheese" />
            <BurgerIngrediants type="meat" /> */}
            {ingrediantArray}
            <BurgerIngrediants type="bread-bottom" />
        </div>
    )
}
