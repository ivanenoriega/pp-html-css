import PropTypes from 'prop-types';
import Head from 'next/head';
import { Container, Card } from 'semantic-ui-react';
import auth0 from './api/utils/auth0';
import NavBar from '../components/navbar';
import CategoryCard from '../components/category/card';
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

  // TODO: Calculate percentage
  // TODO: Define buttontext
  // TODO: Define href
  const categories = getCategories();

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
        <Card.Group>
          {categories.map((category) => (
            <CategoryCard
              title={category.title}
              description={category.description}
              buttontext={category.buttontext}
              href={category.href}
              percent={category.percent}
            />
          ))}
        </Card.Group>
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
