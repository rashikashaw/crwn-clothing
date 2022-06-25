import { createContext, useState } from "react";

export const CartDropdownContext = createContext({
  cartOpen: false,
  setCartOpen: () => null,
});

export const CartDropdownProvider = ({ children }) => {
  const [ cartOpen, setCartOpen ] = useState(false);
  const value = { cartOpen, setCartOpen }
  return(
    <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>
  );
};
