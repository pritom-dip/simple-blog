import Head from 'next/head';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import App from '@/components/App';
import '@/assets/css/main.scss';

function AppWrapper({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Blog App</title>
      </Head>
      <Provider store={store}>
        <App Component={Component} pageProps={pageProps} />
      </Provider>
    </>
  );
}

export default AppWrapper;
