import React from 'react';

import classes from './Input.module.css';

type InputProps = {
  id: string,
  name: string,
  label: string,
  type: string,
  ph?: string,
  min: number,
  max: number,
  step: number,
  defaultVal: string,
  inputRef: any,
};

const Input = ({
    id,
    name,
    label,
    type,
    ph,
    min,
    max,
    step,
    defaultVal,
    inputRef,
  }: InputProps) => {
    
  return (
    <div className={classes.input}>
      <label htmlFor={name}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={ph}
        min={min}
        max={max}
        step={step}
        defaultValue={defaultVal}
        ref={inputRef} />
    </div>
  );
};

export default Input;