import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IUserState } from '@/types/user';
import users from '@/data/users';

type initialStateType = {
  data: IUserState;
};

const initialState: initialStateType = {
  data: {
    email: '',
    name: '',
    likedArticles: [],
    id: ''
  }
} as initialStateType;

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      const name = action.payload;
      state.data = users.find(user => user.name === name) as IUserState;
    },
    likedArticleByUser: (state, action: PayloadAction<string>) => {
      if (state.data.likedArticles.indexOf(action.payload) === -1) {
        state.data.likedArticles = [
          ...state.data.likedArticles,
          action.payload
        ];
      }
    }
  },
  extraReducers: builder => {}
});

export const { login, likedArticleByUser } = userSlice.actions;

export default userSlice.reducer;
