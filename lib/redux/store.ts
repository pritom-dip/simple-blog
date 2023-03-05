import { configureStore } from '@reduxjs/toolkit';
import articleReducer from '@/redux/slices/articleSlice';
import userReducer from '@/redux/slices/userSlice';

export const store = configureStore({
  reducer: {
    articles: articleReducer,
    users: userReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
