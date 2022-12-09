import './Productcard.styles.scss';
import  Button, {BUTTON_TYPE_CLASSES } from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selector';

export const ProductCard = ( { product } ) => {
  const dispatch = useDispatch()
  const addCartItems = useSelector(selectCartItems);
  const onAddToCart = () => {
    dispatch(addItemToCart(addCartItems, product));
  }
  return (
    <div className='product-card-container'>
      <img className='img' src={product.imageUrl} alt={`${product.name}`}/>
      <div className='footer'>
        <span className='name'>{product.name}</span>
        <span className='price'>${product.price}</span>
      </div>
      <Button onClick={onAddToCart} buttonType={BUTTON_TYPE_CLASSES.inverted}>Add to cart</Button>
    </div>
  );
};
