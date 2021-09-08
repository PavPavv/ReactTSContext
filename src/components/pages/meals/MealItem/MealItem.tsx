
import { useContext } from 'react';

import MealItemForm from '../MealItemForm/MealItemForm';
import CartContext from '../../../../store/cart/context'

import classes from './MealItem.module.css';

type MealProps = {
  id: number,
  name: string,
  description: string,
  price: number,
}

const MealItem = ({ id, name, description, price }: MealProps) => {
  const cartCtx = useContext(CartContext);

  const priceFormatted = `$${price.toFixed(2)}`;

  const addToCartHandler = (amount: number): void => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{priceFormatted}</div>
      </div>
      <div>
        <MealItemForm 
          id={id}
          name={name}
          onAddToCart={addToCartHandler} 
        />
      </div>
    </li>
  );
};

export default MealItem;