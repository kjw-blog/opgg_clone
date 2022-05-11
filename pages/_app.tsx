import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import wrapper from '@store/configureStore';
import { SWRConfig } from 'swr';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) =>
          fetch(url).then((response) => response.json()),
      }}
    >
      <Layout>
        <div id="root-modal" />
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}

export default wrapper.withRedux(MyApp);
