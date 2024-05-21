import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext(null);
export const useCartContext = () => useContext(CartContext);

function cartReducer(state = { products: [] }, action) {
  const { product } = action.payload;
  switch (action.type) {
    case "ADD_TO_CART": {
      const isProductExist = state.products.find(
        (prd) => prd.id === product.id
      );
      if (isProductExist) {
        const updatedCart = state.products.map((prd) => {
          if (product.id === prd.id) {
            return { ...prd, quantity: prd.quantity + 1 };
          }
          return prd;
        });
        return { ...state, products: updatedCart };
      } else {
        return {
          ...state,
          products: [...state.products, { ...product, quantity: 1 }],
        };
      }
    }

    case "REMOVE_FROM_CART":
      return { ...state, product:state.products.filter((prd) => prd.id != product.id) };

    default:
      state;
  }
}

function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, { products: [] });
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
