import { Link } from 'react-router-dom';
import { ProductCard } from '../Product-Card/ProductCard';
import './CategoryPreview.styles.scss';
export const CategoryPreview = ({ title, products }) => {
  return (
    <div className='category-preview-container'>
      <h2>
        <Link to={title} className='title'>{title.toUpperCase()}</Link>
      </h2>
      <div className='preview'>
        {products
          .filter((_, i) => i < 4 )
          .map((product)=> (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}; 
 