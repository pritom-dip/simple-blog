import { useRouter } from 'next/router';

const SingleArticle = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>Single Account : {id}</div>;
};

export default SingleArticle;
