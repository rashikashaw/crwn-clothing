import { createContext, useEffect, useState } from "react";

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};


export const CartContext = createContext({
  cartOpen: false,
  setCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => {},
  cartTotal: 0,
  setCartTotal: () => {},
  totalAmount: 0,
  setTotalAmount: () => {}
});

export const CartProvider = ({ children }) => {
  const [ cartOpen, setCartOpen ] = useState(false);
  const [ cartItems, setCartItems  ] = useState([]);
  const [ cartTotal, setCartTotal ] = useState(0);
  const [ totalAmount, setTotalAmount ] = useState(0);

  const addItemToCart = (product) => {
    const newCartItem = addCartItem(cartItems, product);
    setCartItems(newCartItem);
  };


  const value = { cartOpen, setCartOpen, cartItems, setCartItems, addItemToCart, cartTotal, setCartTotal, totalAmount, setTotalAmount };
  useEffect(() => {
    setCartTotal(cartItems.reduce((total, item) => total + item.quantity, 0));
    setTotalAmount(cartItems.reduce((total, item) => total + (item.price * item.quantity), 0 ));
  }, [cartItems]);


  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};