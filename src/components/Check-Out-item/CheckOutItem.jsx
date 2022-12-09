import {ReactComponent as QuantityIncreaseIcon} from '../../Assets/chevron-right.svg'
import {ReactComponent as QuantityDecreaseIcon} from '../../Assets/chevron-left.svg'
import { ReactComponent as CancelIcon } from '../../Assets/cancel.svg';
import styled from '@emotion/styled';
import './CheckOutItem.styles.scss'
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../redux/cart/cart.actions';
const RemoveIconWrapper = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const CheckOutItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem; 
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <span><img src={imageUrl} alt={`${name}`} /></span>
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow'>
          <QuantityDecreaseIcon onClick={removeItemHandler}/>
        </div>
        <span>{quantity}</span>
        <div className='arrow'>
          <QuantityIncreaseIcon onClick={addItemHandler}/>
        </div>
      </span>
      <span className='price'>{quantity*price}</span>
      <RemoveIconWrapper>
        <CancelIcon className='remove-button' onClick={clearItemHandler}/>
      </RemoveIconWrapper>
    </div>
  );
};
