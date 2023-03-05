import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { RootState } from '@/redux/store';
import classNames from 'classnames';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from './ArticleDetails.module.scss';
import HandIcon from '../../assets/images/hand.png';
import HandDownIcon from '../../assets/images/handDown.png';
import {
  dislikeArticle,
  likeArticle,
  makeComment
} from '@/redux/slices/articleSlice';
import { likedArticleByUser } from '@/redux/slices/userSlice';
import { IArticleState } from '@/types/article';
import AuthorImage from '@/assets/images/userimage.jpg';
import Input from '../Common/Input';
import Button from '../Common/Button';

// const comments = [
//   {
//     id: 1,
//     text: 'this is a comment',
//     user: {
//       name: 'pritom'
//     }
//   },
//   {
//     id: 2,
//     text: 'this is another comment',
//     user: {
//       name: 'Dip'
//     }
//   }
// ];

const ArticleDetails = ({ article }: { article: IArticleState }) => {
  // const article = useAppSelector((state: RootState) => state.articles.article);
  const user = useAppSelector((state: RootState) => state.users.data);
  const [inputText, setInputText] = useState<string>('');

  const dispatch = useAppDispatch();

  if (!article) return <div>Loading...</div>;

  const handleLikeButtonClicked = (id: string | number) => {
    dispatch(likeArticle(id));
    dispatch(likedArticleByUser(`${id}`));
  };

  const handleDislikeButtonClicked = (id: string | number) => {
    dispatch(dislikeArticle(id));
  };

  const handleChange = (text: string) => {
    setInputText(text);
  };

  const submitComment = () => {
    if (!inputText) return;
    dispatch(
      makeComment({
        comment: inputText,
        articleId: article?.id,
        name: user.name
      })
    );
    setInputText('');
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

        <div className={styles.commentsWrapper}>
          <h3>Comments</h3>
          <div className={styles.inputComment}>
            <Input
              placeholder="Comment Here........."
              name="input"
              value={inputText}
              handleChange={handleChange}
            />
            <div className={styles.btnWrapper}>
              <Button text="Submit" onClick={submitComment} />
            </div>
          </div>

          {article?.comments?.length > 0 &&
            article?.comments?.map(comment => (
              <div
                key={comment.id}
                className={classNames(styles.wrap, styles.flex)}
              >
                <div className={styles.userImage}>
                  <Image src={AuthorImage} alt={user?.name} />
                </div>
                <div className={styles.comments}>
                  <div className={styles.comment}>{comment?.text}</div>
                  <div className={styles.commenter}>
                    By: <span>{comment?.user?.name}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
