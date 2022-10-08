import './CartDropdown.styles.scss'
import  Button, { BUTTON_TYPE_CLASSES }  from '../Button/Button';
import { CartItem } from "../Cart-Item/cartItem";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';


export const CartDropdown = () => {
const cartItems = useSelector(selectCartItems);
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
