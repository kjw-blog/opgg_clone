import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import wrapper from '@store/configureStore';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <div id="root-modal" />
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(MyApp);
