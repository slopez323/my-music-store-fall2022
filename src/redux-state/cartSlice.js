import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      if (state.some((product) => product.id === action.payload.id)) {
        const updatedCart = state.map((item) => {
          if (item.id === action.payload.id) {
            const newQty = item.qty + 1;
            return { ...item, qty: newQty };
          }
          return item;
        });
        return [...updatedCart];
      }
      return [...state, { ...action.payload, qty: 1 }];
    },
    removeFromCart: (state, action) =>
      state.filter((item) => item.id !== action.payload.id),
    emptyCart: () => [],
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
