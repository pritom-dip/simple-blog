import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IArticleState } from '@/types/article';
import articles from '@/data/articles';

const initialState: IArticleState[] = articles;

export const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {}
});

export const {} = articleSlice.actions;

export default articleSlice.reducer;
