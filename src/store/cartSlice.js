import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let existe = state.cart.some(
        (product) => product.id === action.payload.id
      );
      if (existe) {
        let newArr = state.cart.map((elemento) => {
          if (elemento.id === action.payload.id) {
            return {
              ...elemento,
              quantity: elemento.quantity + action.payload.quantity,
            };
          } else {
            return elemento;
          }
        });

        state.cart = newArr;
      } else {
        state.cart = [...state.cart, action.payload];
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
