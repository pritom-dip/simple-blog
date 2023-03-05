import ArticleDetails from '@/components/ArticleDetails';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { fetchArticleById } from '@/redux/actions/getSingleArticle';
import { RootState } from '@/redux/store';
import { IArticleState } from '@/types/article';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const SingleArticle = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const dispatch = useAppDispatch();
  const articles = useAppSelector((state: RootState) => state.articles);
  const [article, setArticle] = useState({} as IArticleState);

  useEffect(() => {
    if (id) {
      // One Way
      // dispatch(fetchArticleById(id));

      // Another Way
      const data: IArticleState = articles.articles.find(
        article => article.id === +id
      )!;
      setArticle(data);
    }
  }, [id, articles]);

  return (
    <div className="container">
      <ArticleDetails article={article} />
    </div>
  );
};

export default SingleArticle;
