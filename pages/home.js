import Head from 'next/head';
import styles from '../styles/Home.module.css';
import auth0 from './api/utils/auth0';

export async function getServerSideProps(context) {
  const session = await auth0.getSession(context.req);

  if (!session || !session?.user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { user: session?.user || null },
  };
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Practice Platform: Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Practice Platform: Home</h1>
        <a href="/api/logout">Logout</a>
      </main>
    </div>
  );
}
