import { configureStore } from '@reduxjs/toolkit';
import articleReducer from '@/redux/slices/articleSlice';

export const store = configureStore({
  reducer: {
    articles: articleReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
