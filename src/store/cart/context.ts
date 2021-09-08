import React, { createContext } from "react";

import { CartStore } from './CartProvider';

const CartContext = createContext<CartStore>({
  items: [],
  totalAmount: 0,
  addItem: (item: any) => {},
  removeItem: (item: any) => {},
});

export default CartContext;