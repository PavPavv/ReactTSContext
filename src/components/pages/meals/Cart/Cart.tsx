import { useContext } from 'react';

import Modal from '../../../ui/Modal/Modal';
import CartItem from '../CartItem/CartItem';
import CartContext from '../../../../store/cart/context';
import { CartItemI } from '../../../../store/cart/CartProvider'

import classes from './Cart.module.css';

type CartProps = {
  onClose: () => void,
};

const Cart = ({ onClose }: CartProps) => {
  const cartCtx = useContext(CartContext);

  const summaryAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (item: CartItemI): void => {
    cartCtx.removeItem(item);
  };

  const cartItemAddHandler = (item: CartItemI): void => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={onClose}>
      <>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{summaryAmount}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={onClose}>
            Close
          </button>
          {hasItems && <button className={classes.button}>Order</button>}
        </div>
      </>
    </Modal>
  );
};

export default Cart;