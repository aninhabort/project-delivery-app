import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalValue: 0,
  products: [],
};

const getTotalValue = (state) => state.products.reduce((acc, product) => {
  const { quantity, price } = product;
  return acc + (quantity * price);
}, state.totalValue);

export const Counter = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    Cart: (state, { payload }) => {
      state.products = payload.map((product) => ({ quantity: 0, ...product }));
    },
    updateProduct: (state, { payload }) => {
      const product = state.products.findIndex(
        ({ name }) => name === payload.name,
      );
      if (payload.quantity >= 0) {
        state.products[product].quantity = Number(payload.quantity);
      }

      state.totalValue = 0;
      state.totalValue = getTotalValue(state);
    },
    addProduct: (state, { payload }) => {
      const product = state.products.findIndex(
        ({ name }) => name === payload.name,
      );

      state.products[product].quantity += 1;
      state.totalValue = 0;
      state.totalValue = getTotalValue(state);
    },
    decreaseProduct: (state, { payload }) => {
      const product = state.products.findIndex(
        ({ name }) => name === payload.name,
      );

      state.products[product].quantity -= 1;
      state.totalValue = 0;
      state.totalValue = getTotalValue(state);
    },
    removeProduct: (state, { payload }) => {
      const product = state.products.findIndex(
        ({ name }) => name === payload.product.name,
      );
      state.products[product].quantity = 0;

      state.totalValue = 0;
      state.totalValue = getTotalValue(state);
    },
  },
});

export const {
  Cart, updateProduct, addProduct, decreaseProduct, removeProduct,
} = Counter.actions;
export const selectCart = (state) => state.cart.products;
export const selectTotalValue = (state) => state.cart.totalValue;
export default Counter.reducer;
