import { IArticleState } from '@/types/article';
import Image from 'next/image';
import Button from '../Button';
import styles from './Card.module.scss';

const Card = ({ article }: { article: IArticleState }) => {
  const { id, description, image, title, category, tags } = article || {};

  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <div className={styles.cardwrapper}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={title} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.btnWrapper}>
          <Button text="Click Here To Submit" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};
export default Card;
