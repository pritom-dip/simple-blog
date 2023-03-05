export interface IArticleState {
  id: number | string;
  title: string;
  description: string;
  image: any;
  category?: string;
  tags?: string[];
  createby?: IArticleCreator;
  likes: number;
  dislikes: number;
}

export interface IArticleCreator {
  name: string;
  email: string;
  image: any;
}
