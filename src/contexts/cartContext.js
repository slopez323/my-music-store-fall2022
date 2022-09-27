import { createContext, useContext, useState } from "react";

const cartContext = createContext();

export function CartContextProvider(props) {
  const { children } = props;
  const [shoppingCart, setShoppingCart] = useState([]);

  return (
    <cartContext.Provider value={{ shoppingCart, setShoppingCart }}>
      {children}
    </cartContext.Provider>
  );
}

export const useCart = () => useContext(cartContext);
