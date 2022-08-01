import { Route, Routes } from "react-router-dom";
import { CategoriesPreview } from "../Categories-Preview/CategoriesPreview";
import { Category } from "../Category/Category";
export const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />}/>
      <Route path=':category' index element={<Category />}/>
    </Routes>
  );
}
