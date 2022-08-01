import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";
import { ProductCard } from "../../components/Product-Card/ProductCard";
import { useState, useEffect, useContext } from "react";
import { CategoryContainer, Title } from './Category.styles';

export const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext( CategoriesContext );
  const [ products, setProducts ] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return(
    <>
    <Title className="category-title">{category}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </CategoryContainer>
    </>
  );
};
