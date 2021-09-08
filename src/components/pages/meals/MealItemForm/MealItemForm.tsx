import React, { useRef, useState } from 'react';

import Input from '../../../ui/Input/Input';

import classes from './MealItemForm.module.css';

type MealItemFormProps = {
  id: number,
  name: string,
  onAddToCart: (amount: number) => void,
};

const MealItemForm = ({ id, name, onAddToCart }: MealItemFormProps) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current?.value;
    if (enteredAmount) {
      const enteredAmountNumber = +enteredAmount;

      if (
        enteredAmount.trim().length === 0 ||
        enteredAmountNumber < 1 ||
        enteredAmountNumber > 5
      ) {
        setAmountIsValid(false);
        return;
      }

      onAddToCart(enteredAmountNumber);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        id={`amount_${id}`}
        name={name}
        label=''
        type='number'
        ph=''
        min={1}
        max={5}
        step={1}
        defaultVal='1'
        inputRef={amountInputRef}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;