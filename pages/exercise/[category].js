import Head from 'next/head';
import auth0 from '../api/utils/auth0';
import NavBar from '../../components/navbar';

export async function getServerSideProps(context) {
  const session = await auth0.getSession(context.req);
  const { category } = context.query;

  if (!session || !session?.user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { user: session?.user || null, category },
  };
}

export default function Category({ category }) {
  return (
    <>
      <Head>
        <title>Practice Platform: Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar active={category} />
      <main>
        <h1>
          Practice Platform:
          {category}
        </h1>
      </main>
    </>
  );
}
