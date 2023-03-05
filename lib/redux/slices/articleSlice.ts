import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IArticleState } from '@/types/article';
import articles from '@/data/articles';
import { fetchArticleById } from '../actions/getSingleArticle';

type InitialStateType = {
  articles: IArticleState[];
  filterArticles: IArticleState[];
  article?: IArticleState;
  loading?: boolean;
};

const initialState: InitialStateType = {
  articles: articles,
  filterArticles: articles
};

export const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    filterArticle: (state, action: PayloadAction<string>) => {
      const filter = action.payload.toLowerCase();
      if (filter === '') {
        state.filterArticles = state.articles;
      } else {
        state.filterArticles = state.articles.filter(
          (article: IArticleState) => {
            return (
              article.category?.toLowerCase().startsWith(filter) ||
              article?.tags?.find(tag => tag.toLowerCase().startsWith(filter))
            );
          }
        );
      }
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchArticleById.fulfilled, (state, action) => {
      state.article = action.payload;
    });
  }
});

export const { filterArticle } = articleSlice.actions;

export default articleSlice.reducer;
