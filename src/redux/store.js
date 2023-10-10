import { configureStore } from '@reduxjs/toolkit';
import balanceReducer from './reducers';

const store = configureStore({
  reducer: balanceReducer,
     // Добавьте редуктор истории скинов
  
});
export default store;