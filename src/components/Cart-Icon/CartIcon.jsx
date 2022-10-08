import { ShoppingIcon, CartIconContainer, ItemCount } from './CartIcon.styles';
// import { ReactComponent as ShoppingIcon } from '../../Assets/shopping-bag.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.actions';


export const CartIcon = () => {
  const dispatch = useDispatch();
  const cartOpen = useSelector(selectIsCartOpen)
  const cartCount = useSelector(selectCartCount);

  const cartOpenHandler = () => {
    dispatch(setIsCartOpen(!cartOpen))
  }

  return (
    <CartIconContainer onClick={cartOpenHandler}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
