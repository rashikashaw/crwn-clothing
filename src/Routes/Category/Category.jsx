import { useParams } from "react-router-dom";
import { ProductCard } from "../../components/Product-Card/ProductCard";
import { useState, useEffect } from "react";
import { CategoryContainer, Title } from './Category.styles';
import { useSelector } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import { selectCategoriesIsLoading } from "../../store/categories/category.selector";

export const Category = () => {
  const { category } = useParams();
  const  categoriesMap  = useSelector(selectCategoriesMap);
  const [ products, setProducts ] = useState(categoriesMap[category]);
  const categoriesIsLoading = useSelector(selectCategoriesIsLoading);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return(
    <>
      <Title className="category-title">{category}</Title>
      {
        categoriesIsLoading ? ( <Spinner/> 
        ) : (
          <CategoryContainer>
            {products &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </CategoryContainer>
        )
      }
    </>
  );
};
