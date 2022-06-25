import './CartDropdown.styles.scss'
import { Button } from '../Button/Button';

export const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'/>
      <Button>Go to checkout</Button>
    </div>
  );
};
