import { IArticleState } from './../types/article.d';
import ImageOne from '@/assets/images/image1.jpg';
import ImageTwo from '@/assets/images/image2.jpg';
import ImageThree from '@/assets/images/image3.jpg';
import ImageFour from '@/assets/images/image4.jpg';
import AuthorImage from '@/assets/images/author.png';

const articles: IArticleState[] = [
  {
    id: 1,
    title: 'From the Other Side of the World',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia odio dolorem amet, sunt magnam asperiores exercitationem consequuntur? Molestias asperiores rerum doloremque reiciendis.',
    image: ImageOne,
    createby: {
      name: 'John Doe',
      email: 'john@doe.com',
      image: AuthorImage
    },
    category: 'sports',
    tags: ['premier league', 'england']
  },
  {
    id: 2,
    title: 'Article 2',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia odio dolorem amet, sunt magnam asperiores exercitationem consequuntur? Molestias asperiores rerum doloremque reiciendis.',
    image: ImageTwo,
    createby: {
      name: 'John Doe',
      email: 'john@doe.com',
      image: AuthorImage
    },
    category: 'news',
    tags: ['la league', 'spain']
  },
  {
    id: 3,
    title: 'Article 3',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia odio dolorem amet, sunt magnam asperiores exercitationem consequuntur? Molestias asperiores rerum doloremque reiciendis.',
    image: ImageThree,
    createby: {
      name: 'John Doe',
      email: 'john@doe.com',
      image: AuthorImage
    },
    category: 'shopping',
    tags: ['aarong', 'estacy']
  },
  {
    id: 4,
    title: 'Article 4',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia odio dolorem amet, sunt magnam asperiores exercitationem consequuntur? Molestias asperiores rerum doloremque reiciendis.',
    image: ImageFour,
    createby: {
      name: 'John Doe',
      email: 'john@doe.com',
      image: AuthorImage
    },
    category: 'games',
    tags: ['cricket', 'football']
  }
];

export default articles;
