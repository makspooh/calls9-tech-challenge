import { createSlice } from "@reduxjs/toolkit";

const toastSlice = createSlice({
  name: "toast",
  initialState: {
    toasts: [],
  },
  reducers: {
    addToast: (state, action) => {
      state.toasts.push(action.payload);
    },
    removeToastByIndex: (state, action) => {
      const index = action.payload;

      state.toasts.splice(index, 1);
    },
  },
});

export const { addToast, removeToastByIndex } = toastSlice.actions;

export default toastSlice.reducer;
