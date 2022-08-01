import {ReactComponent as QuantityIncreaseIcon} from '../../Assets/chevron-right.svg'
import {ReactComponent as QuantityDecreaseIcon} from '../../Assets/chevron-left.svg'
import { ReactComponent as CancelIcon } from '../../Assets/cancel.svg';
import styled from '@emotion/styled';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
import './CheckOutItem.styles.scss'

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
  const { cartItems, setCartItems } = useContext( CartContext );
  const { id, imageUrl, price, name, quantity } = cartItem; 
  const onIncrease = () => {
    const updatedCartItems = cartItems.map((item) => {
      if (id === item.id) {
        return {
          ...item,
          quantity: item.quantity+1,
        }
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };
  const onDecrease = () => {
    const updatedCartItems = cartItems.map((item) => {
      if (id === item.id) {
        return {
          ...item,
          quantity: item.quantity-1,
        }
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const onCancel = () => {
    const updatedCartItems = cartItems.filter((item) => {
      return item.id !== id;
    });
    setCartItems(updatedCartItems);
  }


  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <span><img src={imageUrl} alt={`${name}`} /></span>
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow'>
          <QuantityDecreaseIcon onClick={onDecrease}/>
        </div>
        <span>{quantity}</span>
        <div className='arrow'>
          <QuantityIncreaseIcon onClick={onIncrease}/>
        </div>
      </span>
      <span className='price'>{quantity*price}</span>
      <RemoveIconWrapper>
        <CancelIcon className='remove-button' onClick={onCancel}/>
      </RemoveIconWrapper>
    </div>
  );
};
