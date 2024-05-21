import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext(null);

const useCartContext = () => useContext(CartContext);

const INITIAL_STATE = {
  cart: [],
};
function handleCart(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { product } = action.payload;
      const isProductExist = state.cart.find((prd) => prd.id === product.id);
      if (isProductExist) {
        isProductExist.quantity += 1;
        return { ...state };
      } else {
        return { ...state, cart: [...state.cart, { ...product, quantity: 1 }] };
      }
    }
    case "REMOVE_FROM_CART": {
      const { id } = action.payload;
      return { ...state, cart: state.cart.filter((prd) => prd.id != id) };
    }
    default:
      [];
  }
}
function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(handleCart, INITIAL_STATE);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export { useCartContext, CartProvider };
