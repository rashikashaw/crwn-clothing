import React from "react";
import { CategoryItem } from "../Category-item/CategoryItem";

export const CategoryList = ({ categories }) => {
  return(
    <div className='categories-container'>
      {categories.map((category) => (
        <CategoryItem category={category} /> 
      ))}
    </div>
  );
}