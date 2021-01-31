import Head from 'next/head';
import styles from '../styles/Home.module.css';
import auth0 from './api/utils/auth0';

export async function getServerSideProps(context) {
  const session = await auth0.getSession(context.req);

  if (!session || !session?.user) {
    return {
      props: {},
    };
  }

  return {
    redirect: {
      destination: '/home',
      permanent: false,
    },
  };
}

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Practice Platform</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Practice Platform</h1>
        <a href="/api/login">login</a>
      </main>
    </div>
  );
}
