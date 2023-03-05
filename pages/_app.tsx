import type { AppProps } from 'next/app';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import '@/assets/css/main.scss';
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
