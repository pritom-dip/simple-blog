import { useAppSelector } from '@/hooks/hooks';
import { RootState } from '@/redux/store';
import { IArticleState } from '@/types/article';
import { useEffect, useState } from 'react';
import Card from '../Card';
import styles from './Profile.module.scss';

const Profile = () => {
  const [articles, setArticles] = useState<IArticleState[]>([]);

  const allArticles = useAppSelector(
    (state: RootState) => state.articles.articles
  );
  const likedIds = useAppSelector(
    (state: RootState) => state.users.data.likedArticles
  );

  useEffect(() => {
    const filteredArticles = allArticles.filter(article =>
      likedIds.includes(`${article.id}`)
    );
    setArticles(filteredArticles);
  }, [likedIds, allArticles]);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>User Likes posts</h1>
      <section className="container flex">
        {articles.length > 0 &&
          articles.map(article => {
            return <Card key={article.id} article={article} />;
          })}
      </section>
    </div>
  );
};

export default Profile;
