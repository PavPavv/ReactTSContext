import React, { useReducer } from "react";
import Cart from "../../components/pages/meals/Cart/Cart";

import CartContext from "./context";

// cart store interfaces
export interface CartItemI {
  amount: number;
  id: number;
  name: string;
  price: number;
};

export interface CartAction {
  type: string;
  payload: CartItemI;
}


export interface CartStore {
  items: CartItemI[];
  totalAmount: number;
  addItem: (item: CartItemI) => void;
  removeItem: (item: CartItemI) => void;
};

//  cart store
const defaultCartState = {
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
};

const cartReducer = (state: CartStore, action: CartAction): CartStore => {
  if (action.type === 'ADD_CART_ITEM') {
    const updatedTotalAmount = state.totalAmount + action.payload.price * action.payload.amount;
    const existingCartItemIdx = state.items.findIndex(item => {
      return item.id === action.payload.id;
    });
    const existingCartItem = state.items[existingCartItemIdx];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.payload.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIdx] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.payload);
    }

    return {
      ...state,
      ...{
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      }
    }
  }

  if (action.type === 'REMOVE_CART_ITEM') {
    const existingCartItemIdx = state.items.findIndex(item => {
      return item.id === action.payload.id;
    });

    const existingItem = state.items[existingCartItemIdx];
    const updatedTotalAmount = state.totalAmount - existingItem.amount;

    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.payload.id);
    } else {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIdx] = updatedItem;
    }

    return {
      ...state,
      ...{
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      }
    }
  }

  return defaultCartState;
};


// CartProvider component itself
type CartProviderProps = {
  children: JSX.Element,
};

const CartProvider = ({ children }: CartProviderProps): JSX.Element => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item: CartItemI): void => {
    dispatchCartAction({
      type: 'ADD_CART_ITEM',
      payload: item,
    });
  };

  const removeItemFromCartHandler = (item: CartItemI): void => {
    dispatchCartAction({
      type: 'REMOVE_CART_ITEM',
      payload: item,
    });
  };
  
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem:removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;


