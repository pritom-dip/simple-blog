import { IArticleState } from '@/types/article';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Card.module.scss';

const Card = ({ article }: { article: IArticleState }) => {
  const { id, description, image, title, category, tags, createby } =
    article || {};

  return (
    <div className={classNames(styles.cardwrapper, styles.flex)}>
      <div className={styles.imageWrapper}>
        <Link href={`/article/${id}`}>
          <Image src={image} alt={title} />
        </Link>
      </div>

      <div
        className={classNames(
          styles.content,
          styles.flex,
          styles.directionColumn
        )}
      >
        <div>
          <Link href={`/article/${id}`}>
            <h3 className={styles.title}>{title}</h3>
          </Link>
          <div className={styles.author}>By {createby?.name}</div>
        </div>

        <p className={styles.description}>{description}</p>
        {category ? (
          <div className={classNames(styles.flex, styles.alignCenter)}>
            <span className={styles.category}>Category</span>
            <span className={styles.badge}>{category}</span>
          </div>
        ) : null}

        {tags ? (
          <div className={classNames(styles.flex, styles.alignCenter)}>
            <span className={styles.category}>Tags</span>
            <div
              className={classNames(
                styles.tags,
                styles.flex,
                styles.alignCenter
              )}
            >
              {tags.map((tag, index) => (
                <span key={index} className={styles.badge}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Card;
