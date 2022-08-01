import './CartDropdown.styles.scss'
import  Button, { BUTTON_TYPE_CLASSES }  from '../Button/Button';
import { CartItem } from "../Cart-Item/cartItem";
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';

export const CartDropdown = () => {
const { cartItems } = useContext(CartContext);
const navigate = useNavigate();
const goToCheckoutHandler = () => {
  navigate('/check-out');
};
return (
  <div className='cart-dropdown-container'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
    <Button onClick={goToCheckoutHandler} buttonType={BUTTON_TYPE_CLASSES.inverted}>
        Checkout
    </Button>
  </div>
);
};
