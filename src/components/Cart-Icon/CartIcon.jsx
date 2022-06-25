import './CartIcon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../Assets/shopping-bag.svg';
import { CartDropdownContext } from '../../contexts/cartDropdown.context';
import { useContext } from 'react';

export const CartIcon = () => {
  const { cartOpen, setCartOpen } = useContext(CartDropdownContext)
   const cartOpenHandler = () => {
    setCartOpen(!cartOpen)
  }

  return (
    <div className='cart-icon-container'>
      <ShoppingIcon className='shopping-icon' onClick={cartOpenHandler} />
      <span className='item-count'>0</span>
    </div>
  );
};
