import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IArticleState } from '@/types/article';
import articles from '@/data/articles';
import { fetchArticleById } from '../actions/getSingleArticle';

type InitialStateType = {
  articles: IArticleState[];
  filterArticles: IArticleState[];
  article: IArticleState;
  loading: boolean;
};

const initialState: InitialStateType = {
  articles: articles,
  filterArticles: articles,
  article: {
    id: '',
    title: '',
    description: '',
    category: '',
    tags: [],
    likes: 0,
    dislikes: 0,
    image: ''
  },
  loading: false
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
    },
    likeArticle: (state, action: PayloadAction<string | number>) => {
      const articleId = action.payload;
      const article = state.articles.find(
        (article: IArticleState) => article.id === +articleId
      );

      if (article) {
        article.likes = article.likes + 1;
        state.article.likes = state.article.likes + 1;
      }
    },
    dislikeArticle: (state, action: PayloadAction<string | number>) => {
      const articleId = action.payload;
      const article = state.articles.find(
        (article: IArticleState) => article.id === +articleId
      );

      if (article) {
        article.dislikes = article.dislikes + 1;
        state.article.dislikes = state.article.dislikes + 1;
      }
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchArticleById.fulfilled, (state, action) => {
      if (!action.payload) return;
      state.article = action.payload;
    });
  }
});

export const { filterArticle, likeArticle, dislikeArticle } =
  articleSlice.actions;

export default articleSlice.reducer;
