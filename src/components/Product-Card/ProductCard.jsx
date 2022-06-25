import './Productcard.styles.scss';
import { Button } from '../Button/Button';

export const ProductCard = ({ name, price, imageUrl }) => {
  return (
    <div className='product-card-container'>
      <img className='img' src={imageUrl} alt={`${name}`}/>
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted'>Add to cart</Button>
    </div>
  );
};
