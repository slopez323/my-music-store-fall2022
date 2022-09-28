import { createContext, useContext, useReducer } from "react";

const cartContext = createContext();

const cartReducer = (state, action) => {
  if (action.type === "add-to-cart") {
    if (
      action.payload.cart.some(
        (product) => product.id === action.payload.item.id
      )
    ) {
      const updatedCart = action.payload.cart.map((item) => {
        if (item.id === action.payload.item.id) {
          const newQty = item.qty + 1;
          return { ...item, qty: newQty };
        }
        return item;
      });
      return [...updatedCart];
    }
    return [...action.payload.cart, { ...action.payload.item, qty: 1 }];
  }
  if (action.type === "remove-from-cart") {
    const updatedCart = action.payload.cart.filter(
      (item) => item.id !== action.payload.item.id
    );
    return updatedCart;
  }
  if (action.type === "empty") {
    return [];
  }
  return state;
};

export function CartContextProvider(props) {
  const { children } = props;
  const [shoppingCart, cartDispatch] = useReducer(cartReducer, []);

  const addToCart = (productToAdd) =>
    cartDispatch({
      type: "add-to-cart",
      payload: { item: productToAdd, cart: shoppingCart },
    });

  const removeFromCart = (itemToDelete) =>
    cartDispatch({
      type: "remove-from-cart",
      payload: { item: itemToDelete, cart: shoppingCart },
    });

  const emptyCart = () => cartDispatch({ type: "empty" });

  return (
    <cartContext.Provider
      value={{ shoppingCart, addToCart, removeFromCart, emptyCart }}
    >
      {children}
    </cartContext.Provider>
  );
}

export const useCart = () => useContext(cartContext);
