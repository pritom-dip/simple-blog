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
  comments: IComment[];
}

export interface IComment {
  id: number;
  text: string;
  user: {
    name: string;
  };
}

export interface IArticleCreator {
  name: string;
  email: string;
  image: any;
}
