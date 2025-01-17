import React from 'react';
import styles from './Order.css';

const Order = (props) => {

    const ingredients = [];

    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        })
    }

    const ingredientOutput = ingredients.map(ing => {
        return <span
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
            }}
            key={ing.name}>{ing.name} ({ing.amount})</span>
    })

    return (
        <div className={styles.Order}>
            <p>Ingredients: {ingredientOutput}</p>

            <p>Price: <strong>{props.price.toFixed(2)}</strong></p>
        </div>
    )
}

export default Order;
