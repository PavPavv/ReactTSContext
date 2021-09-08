import React, { useState } from 'react';

import Header from './components/ui/Header/Header';
import Meals from './components/pages/meals/Meals/Meals';
import Cart from './components/pages/meals/Cart/Cart';
import CartProvider from './store/cart/CartProvider';

import './App.css';

const App = (): JSX.Element => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = (): void => {
    setCartIsShown(true);
  };

  const hideCartHandler = (): void => {
    setCartIsShown(false);
  };
  
  return (
    <CartProvider>
      <>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShownCart={showCartHandler} />
        <main>
          <Meals />
        </main>
      </>
    </CartProvider>
  );
}

export default App;
