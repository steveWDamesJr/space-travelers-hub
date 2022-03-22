import { configureStore } from '@reduxjs/toolkit';
import getRockets from './rocketsSlice';

const store = configureStore({
  reducer: {
    getRockets,
  },
});

export default store;
