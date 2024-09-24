// store/productSlice.ts
"use client";
import { createSlice } from "@reduxjs/toolkit";

interface ProductState {
  activeCapacity: string;
}

const initialState: ProductState = {
  activeCapacity: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setActiveCapacity: (state, action) => {
      state.activeCapacity = action.payload;
    },
  },
});

export const { setActiveCapacity } = productSlice.actions;
export default productSlice.reducer;
