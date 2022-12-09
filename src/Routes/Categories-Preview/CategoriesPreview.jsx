import { CategoryPreview } from '../../components/Category-Preview/CategoryPreview';
import { useSelector } from 'react-redux';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../redux/categories/category.selector';
import Spinner from '../../components/Spinner/Spinner';

export const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading)
  console.log(categoriesMap)
  return (
    <>
      {
        isLoading ? ( <Spinner/>
        ) : (
          Object.keys(categoriesMap).map((key) => {
            const products = categoriesMap[key];
            return <CategoryPreview key={key} title={key} products={products} />;
          })
        )
      }
    </>
  );
};
