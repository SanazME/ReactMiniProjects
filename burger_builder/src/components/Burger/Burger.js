import React from 'react';
import classes from './Burger.module.css';
import BurgerIngrediants from './BurgerIngrediant/BurgerIngrediant';

export default function Burger(props) {
    return (
        <div className={classes.Burger}>
            <BurgerIngrediants type="bread-top" />
            <BurgerIngrediants type="cheese" />
            <BurgerIngrediants type="meat" />
            <BurgerIngrediants type="bread-bottom" />
        </div>
    )
}
