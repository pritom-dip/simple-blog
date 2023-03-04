export interface IArticleState {
  id: number | string;
  title: string;
  description: string;
  image: any;
  category?: string;
  tags?: string[];
}
