import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    signIn: (state, action) => action.payload,
    signOut: () => null,
  },
});

export const { signIn, signOut } = userSlice.actions;
