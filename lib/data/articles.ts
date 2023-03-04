import { IArticleState } from './../types/article.d';
import ImageOne from '@/assets/images/image1.jpg';
import ImageTwo from '@/assets/images/image2.jpg';
import ImageThree from '@/assets/images/image3.jpg';
import ImageFour from '@/assets/images/image4.jpg';

const articles: IArticleState[] = [
  {
    id: 1,
    title: 'Article 1',
    description: 'Article 1 content',
    image: ImageOne
  },
  {
    id: 2,
    title: 'Article 2',
    description: 'Article 2 content',
    image: ImageTwo
  },
  {
    id: 3,
    title: 'Article 3',
    description: 'Article 3 content',
    image: ImageThree
  },
  {
    id: 4,
    title: 'Article 4',
    description: 'Article 4 content',
    image: ImageFour
  }
];

export default articles;
