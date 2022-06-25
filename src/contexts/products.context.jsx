import { createContext, useState } from "react";
import PRODUCTS from '../shopData.json'

export const ProductsContext = createContext({
  products: [],
  setProducts: () => [],
});

export const ProductProvider = ({ children }) => {
  const [ products, setProducts] = useState([]);
  const value = { products }
  return (
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
  )
};

