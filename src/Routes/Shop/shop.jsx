import { Route, Routes } from "react-router-dom";
import { CategoriesPreview } from "../Categories-Preview/CategoriesPreview";
import { Category } from "../Category/Category";
import { useEffect } from "react";
import { fetchCategoriesStart } from "../../redux/categories/category.actions";
import { useDispatch } from 'react-redux';

export const Shop = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />}/>
      <Route path=':category' index element={<Category />}/>
    </Routes>
  );
}
