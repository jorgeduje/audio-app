import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  total: 0,
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
        localStorage.setItem("cart", JSON.stringify(newArr));
      } else {
        localStorage.setItem(
          "cart",
          JSON.stringify([...state.cart, action.payload])
        );
        state.cart = [...state.cart, action.payload];
      }

      // GUARDA EN EL STORAGE LO QUE TENGA EL CARRITO EN ESTE PUNTO
    },
    clearCart: (state) => {
      state.cart = [];

      // GUARDA EN EL STORAGE LO QUE TENGA EL CARRITO EN ESTE PUNTO
      localStorage.removeItem("cart");
    },
    removeById: (state, action) => {
      let newArray = state.cart.filter(
        (product) => product.id !== action.payload
      );
      state.cart = newArray;

      // GUARDA EN EL STORAGE LO QUE TENGA EL CARRITO EN ESTE PUNTO
      localStorage.setItem("cart", JSON.stringify(newArray));
    },
    getTotalPrice: (state) => {
      const total = state.cart.reduce((acc, elemento) => {
        return acc + elemento.quantity * elemento.price;
      }, 0);
      state.total = total;
    },
    decrementOneById: (state, action) => {
      const id = action.payload;

      const newArray = state.cart.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity - 1 };
        } else {
          return product;
        }
      });

      state.cart = newArray;
      localStorage.setItem("cart", JSON.stringify(newArray))
    },
    incrementOneById: (state, action) => {
      const id = action.payload;

      const newArray = state.cart.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity + 1 };
        } else {
          return product;
        }
      });

      state.cart = newArray;
      localStorage.setItem("cart", JSON.stringify(newArray))

    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  clearCart,
  removeById,
  getTotalPrice,
  decrementOneById,
  incrementOneById,
} = cartSlice.actions;

export default cartSlice.reducer;
