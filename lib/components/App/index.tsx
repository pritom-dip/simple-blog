import Layout from '@/components/Layout';
import { useAppSelector } from '@/hooks/hooks';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const App = ({ Component, pageProps }: any) => {
  const [authorized, setAuthorized] = useState<boolean>(false);
  const user = useAppSelector(state => state.users.data);
  const router = useRouter();

  useEffect(() => {
    authCheck(router.asPath);

    const hideContent = () => setAuthorized(false);
    router.events.on('routeChangeStart', hideContent);

    router.events.on('routeChangeComplete', authCheck);

    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    };
  }, [router.asPath]);

  const authCheck = (url: string) => {
    const publicPaths = ['/login', '/'];

    const path = url.split('?')[0];
    if (!user.name && !publicPaths.includes(path)) {
      setAuthorized(false);
      router.push({
        pathname: '/login',
        query: { returnUrl: router.asPath }
      });
    } else {
      setAuthorized(true);
    }
  };

  return <Layout>{authorized && <Component {...pageProps} />}</Layout>;
};

export default App;
