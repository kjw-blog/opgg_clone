import Head from 'next/head';

function Seo({ title }: { title: string }) {
  return (
    <Head>
      <title>{title && title} - League Of Legends</title>
    </Head>
  );
}

export default Seo;
