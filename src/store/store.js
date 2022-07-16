// codigo copiado desde el quick start de la web
import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from "./slices/counter";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  },
})