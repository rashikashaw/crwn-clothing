import SHOP_DATA from '../../shopData.json';
import { UserContext } from '../../contexts/user.context';
import { ProductsContext } from '../../contexts/products.context';
import { useContext } from 'react';
import { ProductCard } from '../../components/Product-Card/ProductCard';
import './shop.styles.scss'

export const Shop = () => {
  const { products } = useContext(ProductsContext)
  return (
    <div className='products-conatiner '>
      {SHOP_DATA.map(({ id, name, price, imageUrl}) => (
        <div key={id}>
          <ProductCard name={name} imageUrl={imageUrl} price={price}/>
        </div>
      ))}
    </div>
  )
}
