import React from 'react';

import HeaderCartButton from '../HeaderCartBtn/HeaderCartBtn';

import classes from './Header.module.css';
import mealsImg from '../../../assets/meals.jpg';

type HeaderProps = {
  onShownCart: () => void,
};

const Header = ({ onShownCart }: HeaderProps): JSX.Element => {
  return (
    <>
      <header className={classes.header}>
        <h1>React TS meals</h1>
        <HeaderCartButton clicked={onShownCart} />
      </header>
      <div className={classes['main-image']}>
        <img alt="meals" src={mealsImg} />
      </div>
    </>
  );
};

export default Header;