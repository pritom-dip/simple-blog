import articles from '@/data/articles';
import { IArticleState } from '@/types/article';
import { createAsyncThunk } from '@reduxjs/toolkit';

const wait = (id: string): Promise<IArticleState | undefined> => {
  return new Promise(resolve =>
    setTimeout(
      () =>
        resolve(articles.find((article: IArticleState) => article.id === +id)),
      1000
    )
  );
};

export const fetchArticleById = createAsyncThunk(
  'articles/fetchArticleById',
  async (id: string) => {
    const response: IArticleState | undefined = await wait(id);
    return response;
  }
);
