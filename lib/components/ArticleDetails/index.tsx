import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { RootState } from '@/redux/store';
import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import styles from './ArticleDetails.module.scss';
import HandIcon from '../../assets/images/hand.png';
import HandDownIcon from '../../assets/images/handDown.png';
import { dislikeArticle, likeArticle } from '@/redux/slices/articleSlice';
import { likedArticleByUser } from '@/redux/slices/userSlice';

const ArticleDetails = () => {
  const article = useAppSelector((state: RootState) => state.articles.article);
  const user = useAppSelector((state: RootState) => state.users);

  console.log(user);

  const dispatch = useAppDispatch();

  if (!article) return <div>Loading...</div>;

  const handleLikeButtonClicked = (id: string | number) => {
    dispatch(likeArticle(id));
    dispatch(likedArticleByUser(`${id}`));
  };

  const handleDislikeButtonClicked = (id: string | number) => {
    dispatch(dislikeArticle(id));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}></div>
      <Image src={article.image} alt="image" />
      <div className={styles.content}>
        <div>
          <h1 className={styles.title}>{article.title}</h1>
          <div className={styles.author}>
            <p>By {article.createby?.name}</p>
          </div>
          <div className={styles.category}>
            <span>Category</span>
            <span className={styles.badge}>{article.category}</span>
          </div>
          <div className={styles.tags}>
            <span>Tags</span>
            {article.tags &&
              article.tags?.length > 0 &&
              article.tags.map(tag => (
                <span key={tag} className={styles.badge}>
                  {tag}
                </span>
              ))}
          </div>
        </div>

        <div className={styles.description}>
          <p>{article.description}</p>
        </div>

        <div className={styles.icons}>
          <div
            className={classNames(
              styles.iconContent,
              styles.directionColumn,
              styles.alignCenter
            )}
            onClick={() => handleLikeButtonClicked(article.id)}
          >
            <div className={styles.icon}>
              <Image src={HandIcon} alt="like" />
            </div>
            <p className={styles.count}>{article.likes}</p>
          </div>

          <div
            className={classNames(
              styles.iconContent,
              styles.directionColumn,
              styles.alignCenter
            )}
            onClick={() => handleDislikeButtonClicked(article.id)}
          >
            <div className={classNames(styles.icon, styles.redIcon)}>
              <Image src={HandDownIcon} alt="dislike" />
            </div>
            <p className={classNames(styles.count, styles.countRed)}>
              {article.dislikes}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
