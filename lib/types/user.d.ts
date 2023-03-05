import { IArticleState } from './article';

export interface IUserState {
  id: number | string;
  name: string;
  email: string;
  likedArticles: string[];
}
