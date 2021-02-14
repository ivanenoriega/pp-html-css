import PropTypes from 'prop-types';
import Head from 'next/head';
import { Container } from 'semantic-ui-react';
import auth0 from './api/utils/auth0';
import NavBar from '../components/navbar';
import CategoryCards from '../components/category/cards';
import { getCategories } from '../content/exercises';

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

  const categories = getCategories();
  // TODO: Calculate percentage
  // TODO: Define buttontext
  // TODO: Define href

  return {
    props: { user: session?.user || null, categories },
  };
}

export default function Home({ categories }) {
  return (
    <>
      <Head>
        <title>Practice Platform: Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar active="home" />
      <Container className="home">
        <CategoryCards categories={categories} />
      </Container>
    </>
  );
}

Home.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      buttontext: PropTypes.string,
      href: PropTypes.string,
      percent: PropTypes.string,
    }),
  ).isRequired,
};
