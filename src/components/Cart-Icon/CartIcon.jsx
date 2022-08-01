import { ShoppingIcon, CartIconContainer, ItemCount } from './CartIcon.styles';
// import { ReactComponent as ShoppingIcon } from '../../Assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

export const CartIcon = () => {
  const { cartOpen, setCartOpen } = useContext(CartContext)
  const { cartTotal } = useContext(CartContext)
  const cartOpenHandler = () => {
    setCartOpen(!cartOpen)
  }

  return (
    <CartIconContainer onClick={cartOpenHandler}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartTotal}</ItemCount>
    </CartIconContainer>
  );
};
