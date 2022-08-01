import { CategoryPreview } from '../../components/Category-Preview/CategoryPreview';
import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';

export const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  console.log(categoriesMap)
  return (
    <>
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </>
  );
}
