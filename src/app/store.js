import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import HomeReducer from '../features/Home/HomeSlice'
import LoginReducer from '../features/Login/LoginSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: HomeReducer,
    login: LoginReducer
  },
});