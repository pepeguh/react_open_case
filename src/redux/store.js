import { configureStore } from '@reduxjs/toolkit';
import balanceReducer from './reducers';

const store = configureStore({
  reducer: balanceReducer,
    
  
});
export default store;