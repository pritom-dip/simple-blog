import ArticleDetails from '@/components/ArticleDetails';
import { useAppDispatch } from '@/hooks/hooks';
import { fetchArticleById } from '@/redux/actions/getSingleArticle';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const SingleArticle = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchArticleById(id));
    }
  }, [id, dispatch]);

  return (
    <div className="container">
      <ArticleDetails />
    </div>
  );
};

export default SingleArticle;
