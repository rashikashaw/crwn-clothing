import './Productcard.styles.scss';
import  Button, {BUTTON_TYPE_CLASSES } from '../Button/Button';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

export const ProductCard = ( { product } ) => {
  const { addItemToCart } = useContext(CartContext)
  const onAddToCart = () => {
    addItemToCart(product)
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
